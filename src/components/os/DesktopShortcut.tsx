import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { IconName, default as getIconByName } from '../../assets/icons';
import colors from '../../constants/colors';
import { Icon } from '../general';

export interface DesktopShortcutProps {
    icon: IconName;
    shortcutName: string;
    invertText?: boolean;
    onOpen: () => void;
}

// --- INÍCIO DA ALTERAÇÃO ---

// Função utilitária para detectar dispositivos com capacidade de toque.
// Ela é segura para ser executada no servidor (SSR) ou no cliente.
const isTouchDevice = () => {
    try {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    } catch (e) {
        return false;
    }
};

// --- FIM DA ALTERAÇÃO ---

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

    // --- INÍCIO DA ALTERAÇÃO ---

    // Verifica se é um dispositivo móvel uma única vez quando o componente é montado.
    const isMobile = useMemo(() => isTouchDevice(), []);

    // --- FIM DA ALTERAÇÃO ---

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

    // --- INÍCIO DA ALTERAÇÃO ---
    // A lógica de clique agora diferencia mobile e desktop.

    const handleClickShortcut = useCallback(() => {
        // Se for um dispositivo móvel, abra com um único clique e ignore a lógica de clique duplo.
        if (isMobile) {
            onOpen && onOpen();
            return;
        }

        // Lógica original de clique duplo para desktop.
        if (doubleClickTimerActive) {
            onOpen && onOpen();
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
    }, [doubleClickTimerActive, isMobile, onOpen]);

    // --- FIM DA ALTERAÇÃO ---

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
            onMouseDown={handleClickShortcut}
            ref={containerRef}
        >
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
                {/* Exibe o ícone */}
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

// Define o tipo para a folha de estilos para evitar erros de TypeScript
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
