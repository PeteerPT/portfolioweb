import React, { useEffect, useRef, useState, useCallback } from 'react';
import Colors from '../../constants/colors';
import { Icon } from '../general';
// Se você tem um ficheiro de som, importe-o aqui.
// import clickSoundFile from '../../assets/sounds/click.mp3';

// Supondo que estas interfaces venham de outros ficheiros.
export interface DesktopWindows {
    [key: string]: {
        zIndex: number;
        minimized: boolean;
        component: JSX.Element;
        name: string;
        icon: IconName;
    };
}
export interface IconName { /* ... */ }


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
    // --- INÍCIO DA ALTERAÇÃO 1 ---
    // Função utilitária para detectar dispositivos com ecrã tátil.
    const isTouchDevice = () => {
        try {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        } catch (e) {
            return false;
        }
    };
    // --- FIM DA ALTERAÇÃO 1 ---

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
    const lastClickInside = useRef(false);
    const [lastActive, setLastActive] = useState('');
    const [time, setTime] = useState(getTime());

    // A sua lógica original para encontrar a janela ativa.
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

    // A sua lógica original para o relógio.
    useEffect(() => {
        const updateTime = () => {
            setTime(getTime());
            setTimeout(updateTime, 5000);
        };
        updateTime();
    }, []); // Corrigido para executar apenas uma vez na montagem.

    const onCheckClick = useCallback(() => {
        if (lastClickInside.current) {
            setStartWindowOpen(true);
        } else {
            setStartWindowOpen(false);
        }
        lastClickInside.current = false;
    }, []);

    // --- INÍCIO DA ALTERAÇÃO 2 ---
    // O seu useEffect original, agora mais inteligente.
    useEffect(() => {
        // Se desejar um som de clique global, pode criá-lo aqui.
        // const clickSound = new Audio(clickSoundFile);

        const handleInteraction = (event: MouseEvent | TouchEvent) => {
            // clickSound.play();
            onCheckClick();
        };

        const eventType = isTouchDevice() ? 'touchstart' : 'mousedown';
        window.addEventListener(eventType, handleInteraction, false);
        return () => {
            window.removeEventListener(eventType, handleInteraction, false);
        };
    }, [onCheckClick]); // Adicionada a dependência correta.
    // --- FIM DA ALTERAÇÃO 2 ---

    const onStartWindowClicked = () => {
        setStartWindowOpen(true);
        lastClickInside.current = true;
    };

    const toggleStartWindow = () => {
        if (!startWindowOpen) {
            lastClickInside.current = true;
        } else {
            lastClickInside.current = false;
        }
    };

    return (
        <div style={styles.toolbarOuter}>
            {startWindowOpen && (
                <div
                    onMouseDown={onStartWindowClicked}
                    onTouchStart={onStartWindowClicked} // Adicionado para consistência
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
                                onMouseDown={shutdown}
                                onTouchStart={shutdown} // Adicionado para consistência
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
                        // --- INÍCIO DA ALTERAÇÃO 3 (Correção de Estilo) ---
                        style={{
                            ...styles.startContainerOuter,
                            ...(startWindowOpen ? styles.activeTabOuter : {})
                        }}
                        // --- FIM DA ALTERAÇÃO 3 ---
                        onMouseDown={toggleStartWindow}
                        onTouchStart={toggleStartWindow} // Adicionado para consistência
                    >
                        <div
                           style={{
                               ...styles.startContainer,
                               ...(startWindowOpen ? styles.activeTabInner : {})
                           }}
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
                                    style={{
                                        ...styles.tabContainerOuter,
                                        ...((lastActive === key && !windows[key].minimized) ? styles.activeTabOuter : {})
                                    }}
                                    onMouseDown={() => toggleMinimize(key)}
                                    onTouchStart={() => toggleMinimize(key)} // Adicionado para consistência
                                >
                                    <div
                                        style={{
                                            ...styles.tabContainer,
                                            ...((lastActive === key && !windows[key].minimized) ? styles.activeTabInner : {})
                                        }}
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

// O seu objeto de estilos original, completo e intacto.
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
        display: 'flex', // Adicionado para alinhamento
        alignItems: 'center' // Adicionado para alinhamento
    },
    verticalStartContainer: {
        height: '100%',
        background: Colors.darkGray,
    },
    verticalText: {
        fontFamily: 'Terminal',
        textOrientation: 'sideways',
        fontSize: 32,
        padding: 4,
        paddingBottom: 64,
        paddingTop: 8,
        letterSpacing: 1,
        color: Colors.lightGray,
        transform: 'scale(-1)',
        WebkitTransform: 'scale(-1)',
        MozTransform: 'scale(-1)',
        msTransform: 'scale(-1)',
        OTransform: 'scale(-1)',
        // @ts-ignore
        writingMode: 'tb-rl',
    },
    startWindowContent: {
        flex: 1,
        display: 'flex', // Adicionado
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    startWindow: {
        position: 'absolute',
        bottom: 32, // Corrigido
        display: 'flex',
        width: 256,
        height: 400, // Altura adicionada
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
        display: 'flex' // Adicionado
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
        display: 'flex', // Adicionado
        alignItems: 'center',
        height: 48, // Altura ajustada
        padding: 12,
        cursor: 'pointer' // Adicionado
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
        backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%),
        linear-gradient(-45deg,  white 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%,  white 75%),
        linear-gradient(-45deg, transparent 75%,  white 75%)`,
        backgroundSize: `4px 4px`,
        backgroundPosition: `0 0, 0 2px, 2px -2px, -2px 0px`,
        pointerEvents: 'none',
    },
    tabContainerOuter: {
        display: 'flex',
        flex: '1 1 auto', // Ajustado
        maxWidth: 150, // Ajustado
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
        overflow: 'hidden' // Adicionado
    },
    tabIcon: {
        marginRight: 6,
        flexShrink: 0 // Adicionado
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
        overflow: 'hidden' // Adicionado
    },
    startIcon: {
        marginRight: 4,
    },
    toolbarInner: {
        borderTop: `1px solid ${Colors.white}`,
        alignItems: 'center',
        flex: 1,
        display: 'flex', // Adicionado
        width: '100%' // Adicionado
    },
    toolbar: {
        flexGrow: 1,
        width: '100%',
        display: 'flex', // Adicionado
        alignItems: 'center' // Adicionado
    },
    time: {
        flexShrink: 0, // Ajustado
        width: 86,
        height: 24,
        boxSizing: 'border-box',
        marginRight: 4,
        paddingLeft: 4,
        paddingRight: 4,
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderLeftColor: Colors.darkGray,
        display: 'flex' // Adicionado
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
        textOverflow: 'ellipsis' // Adicionado
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
};

type StyleSheetCSS = { [key: string]: React.CSSProperties | { [key: string]: any } };

export default Toolbar;
