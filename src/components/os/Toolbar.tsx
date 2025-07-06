import React, { useEffect, useRef, useState, useCallback } from 'react';
import Colors from '../../constants/colors';
import { Icon } from '../general';
// Se você tiver um arquivo de som de clique, importe-o aqui.
// import clickSoundFile from '../../assets/sounds/click.mp3';

// --- INÍCIO DA ALTERAÇÃO ---

// 1. Função utilitária para detectar dispositivos com capacidade de toque.
const isTouchDevice = () => {
    try {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    } catch (e) {
        return false;
    }
};

// --- FIM DA ALTERAÇÃO ---

// Supondo que a interface DesktopWindows venha de outro arquivo, a mantemos.
// Se ela for definida aqui, ela deve permanecer.
export interface DesktopWindows {
    [key: string]: {
        zIndex: number;
        minimized: boolean;
        component: JSX.Element;
        name: string;
        icon: IconName;
    };
}
export interface IconName { /* ... definição da sua interface IconName ... */ }


export interface ToolbarProps {
    windows: DesktopWindows;
    toggleMinimize: (key: string) => void;
    shutdown: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
    windows,
    toggleMinimize,
    shutdown,
}) => {
    const getTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let mins = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + mins + ' ' + amPm;
        return strTime;
    };

    const [startWindowOpen, setStartWindowOpen] = useState(false);
    const [lastActive, setLastActive] = useState('');
    const [time, setTime] = useState(getTime());
    const startButtonRef = useRef<HTMLDivElement>(null);
    const startMenuRef = useRef<HTMLDivElement>(null);

    // Lógica para encontrar a janela ativa
    useEffect(() => {
        let max = 0;
        let k = '';
        Object.keys(windows).forEach((key) => {
            if (windows[key].zIndex >= max) {
                max = windows[key].zIndex;
                k = key;
            }
        });
        setLastActive(k);
    }, [windows]);
    
    // Lógica do relógio
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getTime());
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // --- INÍCIO DA ALTERAÇÃO ---

    // 2. Lógica centralizada para lidar com cliques e toques
    const handleInteraction = useCallback((event: MouseEvent | TouchEvent) => {
        // Toca o som de clique aqui se desejar um som global
        // const clickSound = new Audio(clickSoundFile);
        // clickSound.play();

        // Lógica para fechar o menu Iniciar se o clique for fora dele e fora do botão Start
        if (
            startMenuRef.current && !startMenuRef.current.contains(event.target as Node) &&
            startButtonRef.current && !startButtonRef.current.contains(event.target as Node)
        ) {
            setStartWindowOpen(false);
        }
    }, []);

    useEffect(() => {
        const isMobile = isTouchDevice();
        // Escolhe o evento correto: 'touchend' para mobile para evitar scroll acidental, 'mousedown' para desktop
        const eventType = isMobile ? 'touchend' : 'mousedown';
        
        document.addEventListener(eventType, handleInteraction);
        return () => {
            document.removeEventListener(eventType, handleInteraction);
        };
    }, [handleInteraction]);
    
    // 3. Função para o botão Start que impede a propagação
    const toggleStartWindow = (event: React.MouseEvent | React.TouchEvent) => {
        // Impede que o clique no botão "vaze" para o listener do documento e feche o menu imediatamente
        event.stopPropagation();
        setStartWindowOpen(prev => !prev);
    };

    // --- FIM DA ALTERAÇÃO ---

    return (
        <div style={styles.toolbarOuter}>
            {startWindowOpen && (
                <div
                    ref={startMenuRef} // Ref para o menu
                    style={styles.startWindow}
                >
                    <div style={styles.startWindowInner}>
                        <div style={styles.verticalStartContainer}>
                            <p style={styles.verticalText}>HeffernanOS</p>
                        </div>
                        <div style={styles.startWindowContent}>
                            <div style={styles.startMenuSpace} />
                            <div style={styles.startMenuLine} />
                            <div
                                className="start-menu-option"
                                style={styles.startMenuOption}
                                onMouseDown={shutdown} // Mantém onMouseDown para ação imediata
                            >
                                <Icon
                                    style={styles.startMenuIcon}
                                    icon="computerBig"
                                />
                                <p style={styles.startMenuText}>
                                    Sh<u>u</u>t down...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div style={styles.toolbarInner}>
                <div style={styles.toolbar}>
                    <div
                        ref={startButtonRef} // Ref para o botão Start
                        style={Object.assign(
                            {},
                            styles.startContainerOuter,
                            startWindowOpen && styles.activeTabOuter
                        )}
                        // --- INÍCIO DA ALTERAÇÃO ---
                        // Usa os eventos corretos para mobile e desktop
                        onTouchEnd={toggleStartWindow}
                        onMouseDown={toggleStartWindow}
                        // --- FIM DA ALTERAÇÃO ---
                    >
                        <div
                            style={Object.assign(
                                {},
                                styles.startContainer,
                                startWindowOpen && styles.activeTabInner
                            )}
                        >
                            <Icon
                                size={18}
                                icon="windowsStartIcon"
                                style={styles.startIcon}
                            />
                            <p className="toolbar-text ">Start</p>
                        </div>
                    </div>
                    <div style={styles.toolbarTabsContainer}>
                        {Object.keys(windows).map((key) => {
                            return (
                                <div
                                    key={key}
                                    style={Object.assign(
                                        {},
                                        styles.tabContainerOuter,
                                        lastActive === key &&
                                        !windows[key].minimized &&
                                        styles.activeTabOuter
                                    )}
                                    onMouseDown={() => toggleMinimize(key)} // Mantém onMouseDown para ação imediata
                                >
                                    <div
                                        style={Object.assign(
                                            {},
                                            styles.tabContainer,
                                            lastActive === key &&
                                            !windows[key].minimized &&
                                            styles.activeTabInner
                                        )}
                                    >
                                        <Icon
                                            size={18}
                                            icon={windows[key].icon}
                                            style={styles.tabIcon}
                                        />
                                        <p style={styles.tabText}>
                                            {windows[key].name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div style={styles.time}>
                    <Icon style={styles.volumeIcon} icon="volumeOn" />
                    <p style={styles.timeText}>{time}</p>
                </div>
            </div>
        </div>
    );
};


// Defina o tipo StyleSheetCSS aqui para evitar erros
type StyleSheetCSS = { [key: string]: React.CSSProperties | { [key: string]: any } };

// Seus estilos
const styles: StyleSheetCSS = {
    toolbarOuter: {
        boxSizing: 'border-box',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 32,
        background: Colors.lightGray,
        borderTop: `1px solid ${Colors.lightGray}`,
        zIndex: 100000,
        display: 'flex', // Adicionado para alinhar o toolbarInner
        alignItems: 'center', // Adicionado para alinhar o toolbarInner
    },
    verticalStartContainer: {
        height: '100%',
        background: Colors.darkGray,
    },
    verticalText: {
        fontFamily: 'Terminal',
        fontSize: 32,
        padding: 4,
        paddingBottom: 64,
        paddingTop: 8,
        letterSpacing: 1,
        color: Colors.lightGray,
        transform: 'scale(-1)',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
    },
    startWindowContent: {
        flex: 1,
        display: 'flex', // Corrigido
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    startWindow: {
        position: 'absolute',
        bottom: 32, // Corrigido para estar acima da barra
        display: 'flex',
        width: 256,
        height: 400, // Altura definida
        left: 4,
        boxSizing: 'border-box',
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        background: Colors.lightGray,
    },
    activeTabOuter: {
        border: `1px solid ${Colors.black}`,
        borderBottomColor: Colors.white,
        borderRightColor: Colors.white,
    },
    startWindowInner: {
        border: `1px solid ${Colors.lightGray}`,
        borderBottomColor: Colors.darkGray,
        borderRightColor: Colors.darkGray,
        flex: 1,
        display: 'flex', // Adicionado
    },
    startMenuIcon: {
        width: 32,
        height: 32,
    },
    startMenuText: {
        fontSize: 14,
        fontFamily: 'MSSerif',
        marginLeft: 8,
    },
    startMenuOption: {
        display: 'flex', // Corrigido
        alignItems: 'center',
        height: 48, // Corrigido
        padding: 12,
        cursor: 'pointer', // Adicionado
    },
    startMenuSpace: {
        flex: 1,
    },
    startMenuLine: {
        height: 1,
        background: Colors.white,
        borderTop: `1px solid ${Colors.darkGray}`,
    },
    activeTabInner: {
        border: `1px solid ${Colors.darkGray}`,
        borderBottomColor: Colors.lightGray,
        borderRightColor: Colors.lightGray,
    },
    tabContainerOuter: {
        display: 'flex',
        flex: '1 1 auto', // Corrigido
        maxWidth: 150, // Corrigido
        marginRight: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
    },
    tabContainer: {
        display: 'flex',
        border: `1px solid ${Colors.lightGray}`,
        borderBottomColor: Colors.darkGray,
        borderRightColor: Colors.darkGray,
        alignItems: 'center',
        paddingLeft: 4,
        flex: 1,
        overflow: 'hidden', // Adicionado
    },
    tabIcon: {
        marginRight: 6,
        flexShrink: 0, // Adicionado
    },
    startContainer: {
        display: 'flex', // Adicionado
        alignItems: 'center',
        flexShrink: 1,
        border: `1px solid ${Colors.lightGray}`,
        borderBottomColor: Colors.darkGray,
        borderRightColor: Colors.darkGray,
        padding: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    startContainerOuter: {
        marginLeft: 3,
        boxSizing: 'border-box',
        cursor: 'pointer',
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
    },
    toolbarTabsContainer: {
        flex: 1,
        display: 'flex', // Adicionado
        marginLeft: 4,
        marginRight: 4,
        overflow: 'hidden', // Adicionado
    },
    startIcon: {
        marginRight: 4,
    },
    toolbarInner: {
        borderTop: `1px solid ${Colors.white}`,
        display: 'flex', // Corrigido
        alignItems: 'center',
        flex: 1,
        width: '100%', // Adicionado
    },
    toolbar: {
        display: 'flex', // Corrigido
        flexGrow: 1,
        width: '100%',
        alignItems: 'center', // Adicionado
    },
    time: {
        flexShrink: 0, // Corrigido
        width: 86,
        height: 24,
        boxSizing: 'border-box',
        marginRight: 4,
        paddingLeft: 4,
        paddingRight: 4,
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        display: 'flex', // Adicionado
        justifyContent: 'space-between',
        alignItems: 'center',
        borderLeftColor: Colors.darkGray,
    },
    volumeIcon: {
        cursor: 'pointer',
        height: 18,
    },
    tabText: {
        fontSize: 14,
        fontFamily: 'MSSerif',
        whiteSpace: 'nowrap', // Adicionado
        overflow: 'hidden', // Adicionado
        textOverflow: 'ellipsis', // Adicionado
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
};

export default Toolbar;
