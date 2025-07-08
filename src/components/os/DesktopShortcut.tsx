import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { IconName, default as getIconByName } from '../../assets/icons';
import colors from '../../constants/colors';
import { Icon } from '../general';

// Para manter a compatibilidade com o Desktop.tsx, a prop onOpen continua esperando um evento.
export interface DesktopShortcutProps {
    icon: IconName;
    shortcutName: string;
    invertText?: boolean;
    onOpen: (event: React.MouseEvent) => void;
}

// Função para detectar dispositivo de toque
const isTouchDevice = () => {
    try {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    } catch (e) {
        return false;
    }
};

const DesktopShortcut: React.FC<DesktopShortcutProps> = ({
    icon,
    shortcutName,
    invertText,
    onOpen,
}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [shortcutId, setShortcutId] = useState('');
    const [lastSelected, setLastSelected] = useState(false);
    const containerRef = useRef<any>();
    const [scaledStyle, setScaledStyle] = useState({});
    const [doubleClickTimerActive, setDoubleClickTimerActive] = useState(false);

    // Determina se é um dispositivo de toque (mobile) uma única vez.
    const isMobile = useMemo(() => isTouchDevice(), []);

    const getShortcutId = useCallback(() => {
        const shortcutId = shortcutName.replace(/\s/g, '');
        return `desktop-shortcut-${shortcutId}`;
    }, [shortcutName]);

    useEffect(() => {
        setShortcutId(getShortcutId());
    }, [shortcutName, getShortcutId]);

    useEffect(() => {
        if (containerRef.current && Object.keys(scaledStyle).length === 0) {
            //@ts-ignore
            const boundingBox = containerRef.current.getBoundingClientRect();
            setScaledStyle({
                transformOrigin: 'center',
                transform: 'scale(1.5)',
                left: boundingBox.width / 4,
                top: boundingBox.height / 4,
            });
        }
    }, [scaledStyle]);

    // --- INÍCIO DA ALTERAÇÃO FINAL ---

    // Handler específico para TOQUE (Mobile)
    const handleTouchStart = (event: React.TouchEvent) => {
        // Esta função só roda em dispositivos de toque
        if (isMobile) {
            // Impede que o navegador dispare eventos de mouse (mousedown, click) depois do toque.
            // Esta é a chave para eliminar os sons duplicados e o delay.
            event.preventDefault();
            // Abre o programa imediatamente. O casting '(event as any)' é necessário
            // porque estamos passando um TouchEvent para uma função que espera um MouseEvent,
            // mas o Desktop.tsx só usa o evento para stopPropagation, então funciona.
            onOpen(event as any);
        }
    };

    // Handler específico para CLIQUE DE MOUSE (Desktop)
    const handleMouseDown = (event: React.MouseEvent) => {
        // Esta função só roda em dispositivos NÃO-toque (desktops)
        if (!isMobile) {
            // Lógica original de duplo-clique, que já estava perfeita para o desktop.
            if (doubleClickTimerActive) {
                onOpen(event);
                setIsSelected(false);
                setDoubleClickTimerActive(false);
                return;
            }
            setIsSelected(true);
            setLastSelected(true);
            setDoubleClickTimerActive(true);
            setTimeout(() => {
                setDoubleClickTimerActive(false);
            }, 300);
        }
    };
    
    // O handler de clique fora permanece o mesmo
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            // @ts-ignore
            const targetId = event.target.id;
            if (targetId !== shortcutId) {
                setIsSelected(false);
            }
            if (!isSelected && lastSelected) {
                setLastSelected(false);
            }
        },
        [isSelected, setIsSelected, setLastSelected, lastSelected, shortcutId]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSelected, handleClickOutside]);

    return (
        <div
            id={`${shortcutId}`}
            style={Object.assign({}, styles.appShortcut, scaledStyle)}
            // Usamos os dois handlers: um para toque, outro para mouse.
            // O código dentro de cada um garante que apenas o correto será executado.
            onTouchStart={handleTouchStart}
            onMouseDown={handleMouseDown}
            ref={containerRef}
        >
        {/* O resto do JSX continua idêntico */}
            <div id={`${shortcutId}`} style={styles.iconContainer}>
                <div
                    id={`${shortcutId}`}
                    className="desktop-shortcut-icon"
                    style={Object.assign(
                        {},
                        styles.iconOverlay,
                        isSelected && styles.checkerboard,
                        isSelected && {
                            WebkitMask: `url(${getIconByName(icon)})`,
                        }
                    )}
                />
                <img src={getIconByName(icon)} alt={shortcutName} style={{ width: 32, height: 32 }} />
            </div>
            <div
                className={
                    isSelected
                        ? 'selected-shortcut-border'
                        : lastSelected
                        ? 'shortcut-border'
                        : ''
                }
                id={`${shortcutId}`}
                style={isSelected ? { backgroundColor: colors.blue } : {}}
            >
                <p
                    id={`${shortcutId}`}
                    style={Object.assign(
                        {},
                        styles.shortcutText,
                        invertText && !isSelected && { color: 'black' }
                    )}
                >
                    {shortcutName}
                </p>
            </div>
        </div>
    );
};
// --- FIM DA ALTERAÇÃO FINAL ---

type StyleSheetCSS = { [key: string]: React.CSSProperties };

const styles: StyleSheetCSS = {
    appShortcut: {
        position: 'absolute',
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    shortcutText: {
        cursor: 'pointer',
        textOverflow: 'wrap',
        fontFamily: 'MSSerif',
        color: 'white',
        fontSize: 8,
        paddingRight: 2,
        paddingLeft: 2,
    },
    iconContainer: {
        cursor: 'pointer',
        paddingBottom: 3,
    },
    iconOverlay: {
        position: 'absolute',
        top: 0,
        width: 32,
        height: 32,
    },
    checkerboard: {
        backgroundImage: `linear-gradient(45deg, ${colors.blue} 25%, transparent 25%),
        linear-gradient(-45deg, ${colors.blue} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${colors.blue} 75%),
        linear-gradient(-45deg, transparent 75%, ${colors.blue} 75%)`,
        backgroundSize: `2px 2px`,
        backgroundPosition: `0 0, 0 1px, 1px -1px, -1px 0px`,
        pointerEvents: 'none',
    },
};

export default DesktopShortcut;
