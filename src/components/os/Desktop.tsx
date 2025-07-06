import React, { useCallback, useEffect, useState, useRef } from 'react'; // Adicionado useRef
import Colors from '../../constants/colors';
import ShowcaseExplorer from '../applications/ShowcaseExplorer';
import Doom from '../applications/Doom';
import OregonTrail from '../applications/OregonTrail';
import ShutdownSequence from './ShutdownSequence';
import Wordle from '../applications/Wordle';
import Toolbar from './Toolbar';
import DesktopShortcut, { DesktopShortcutProps } from './DesktopShortcut';
import Scrabble from '../applications/Scrabble';
import { IconName } from '../../assets/icons';
import Credits from '../applications/Credits';
import MusicApp from '../applications/MusicApp';
import MinecraftApp from '../applications/MinecraftApp';
import CalculatorApp from '../applications/CalculatorApp';

export interface DesktopProps {}

type WindowAppProps = {
    onInteract: () => void;
    onMinimize: () => void;
    onClose: () => void;
};
type ExtendedWindowAppProps<T> = T & WindowAppProps;

type DesktopWindows = {
    [key: string]: {
        zIndex: number;
        minimized: boolean;
        component: JSX.Element;
        name: string;
        icon: IconName;
    };
};

const APPLICATIONS: {
    [key in string]: {
        key: string;
        name: string;
        shortcutIcon: IconName;
        component: React.FC<ExtendedWindowAppProps<any>>;
    };
} = {
    showcase: { key: 'showcase', name: 'My Portfólio', shortcutIcon: 'showcaseIcon', component: ShowcaseExplorer },
    trail: { key: 'trail', name: 'The Oregon Trail', shortcutIcon: 'trailIcon', component: OregonTrail },
    doom: { key: 'doom', name: 'Doom', shortcutIcon: 'doomIcon', component: Doom },
    scrabble: { key: 'scrabble', name: 'Scrabble', shortcutIcon: 'scrabbleIcon', component: Scrabble },
    wordle: { key: 'wordle', name: 'Wordle', shortcutIcon: 'wordleIcon', component: Wordle },
    credits: { key: 'credits', name: 'Credits', shortcutIcon: 'credits', component: Credits },
    music: { key: 'music', name: 'Music Player', shortcutIcon: 'cdIcon', component: MusicApp },
    minecraft: { key: 'minecraft', name: 'Minecraft', shortcutIcon: 'minecraftIcon', component: MinecraftApp },
    calculator: { key: 'calculator', name: 'Calculator', shortcutIcon: 'calculatorIcon', component: CalculatorApp },
};

const Desktop: React.FC<DesktopProps> = (props) => {
    const [windows, setWindows] = useState<DesktopWindows>({});
    const [shortcuts, setShortcuts] = useState<DesktopShortcutProps[]>([]);
    const [shutdown, setShutdown] = useState(false);
    const [numShutdowns, setNumShutdowns] = useState(1);

    // --- INÍCIO DA ALTERAÇÃO ---
    // Usamos uma 'ref' para controlar se uma janela está em processo de abertura.
    // Isto não causa re-renderizações e funciona como um "portão" ou "lock".
    const isOpeningWindow = useRef(false);
    // --- FIM DA ALTERAÇÃO ---

    const rebootDesktop = useCallback(() => {
        setWindows({});
    }, []);

    const removeWindow = useCallback((key: string) => {
        setTimeout(() => {
            setWindows((prevWindows) => {
                const newWindows = { ...prevWindows };
                delete newWindows[key];
                return newWindows;
            });
        }, 100);
    }, []);

    const minimizeWindow = useCallback((key: string) => {
        setWindows((prevWindows) => {
            const newWindows = { ...prevWindows };
            newWindows[key].minimized = true;
            return newWindows;
        });
    }, []);

    const getHighestZIndex = useCallback((): number => {
        let highestZIndex = 0;
        Object.keys(windows).forEach((key) => {
            const window = windows[key];
            if (window) {
                if (window.zIndex > highestZIndex)
                    highestZIndex = window.zIndex;
            }
        });
        return highestZIndex;
    }, [windows]);

    const onWindowInteract = useCallback(
        (key: string) => {
            setWindows((prevWindows) => ({
                ...prevWindows,
                [key]: {
                    ...prevWindows[key],
                    zIndex: 1 + getHighestZIndex(),
                },
            }));
        },
        [getHighestZIndex]
    );

    const addWindow = useCallback(
        (key: string, element: JSX.Element) => {
            setWindows((prevState) => ({
                ...prevState,
                [key]: {
                    zIndex: getHighestZIndex() + 1,
                    minimized: false,
                    component: element,
                    name: APPLICATIONS[key].name,
                    icon: APPLICATIONS[key].shortcutIcon,
                },
            }));
        },
        [getHighestZIndex]
    );

    useEffect(() => {
        if (shutdown === true) {
            rebootDesktop();
        }
    }, [shutdown, rebootDesktop]);

    useEffect(() => {
        const newShortcuts: DesktopShortcutProps[] = [];
        Object.keys(APPLICATIONS).forEach((key) => {
            const app = APPLICATIONS[key];
            newShortcuts.push({
                shortcutName: app.name,
                icon: app.shortcutIcon,
                onOpen: (event?: React.MouseEvent) => {
                    // --- INÍCIO DA ALTERAÇÃO ---
                    // 1. Verificamos se o "portão" está fechado. Se estiver, ignoramos este clique.
                    if (isOpeningWindow.current) return;
                    
                    // 2. O portão não está fechado, então nós o fechamos para bloquear cliques seguintes.
                    isOpeningWindow.current = true;
                    
                    // 3. Opcional, mas recomendado: paramos a propagação do evento como antes.
                    event?.stopPropagation();

                    // 4. Abrimos a janela como de costume.
                    addWindow(
                        app.key,
                        <app.component
                            onInteract={() => onWindowInteract(app.key)}
                            onMinimize={() => minimizeWindow(app.key)}
                            onClose={() => removeWindow(app.key)}
                            key={app.key}
                        />
                    );

                    // 5. Após um curto período, abrimos o portão novamente.
                    // Isso permite que o usuário abra outro programa, mas impede a cascata de sons.
                    setTimeout(() => {
                        isOpeningWindow.current = false;
                    }, 500); // Meio segundo é um bom valor.
                    // --- FIM DA ALTERAÇÃO ---
                },
            });
        });

        setShortcuts(newShortcuts);
    // As dependências foram mantidas como no seu código original.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleMinimize = useCallback(
        (key: string) => {
            const newWindows = { ...windows };
            const highestIndex = getHighestZIndex();
            if (
                newWindows[key].minimized ||
                newWindows[key].zIndex === highestIndex
            ) {
                newWindows[key].minimized = !newWindows[key].minimized;
            }
            newWindows[key].zIndex = getHighestZIndex() + 1;
            setWindows(newWindows);
        },
        [windows, getHighestZIndex]
    );

    const startShutdown = useCallback(() => {
        setTimeout(() => {
            setShutdown(true);
            setNumShutdowns(numShutdowns + 1);
        }, 600);
    }, [numShutdowns]);

    return !shutdown ? (
        <div style={styles.desktop}>
            {Object.keys(windows).map((key) => {
                const element = windows[key].component;
                if (!element) return <div key={`win-${key}`}></div>;
                return (
                    <div
                        key={`win-${key}`}
                        style={Object.assign(
                            {},
                            { zIndex: windows[key].zIndex },
                            windows[key].minimized && styles.minimized
                        )}
                    >
                        {React.cloneElement(element, {
                            key,
                            onInteract: () => onWindowInteract(key),
                            onClose: () => removeWindow(key),
                        })}
                    </div>
                );
            })}
            <div style={styles.shortcuts}>
                {shortcuts.map((shortcut, i) => {
                    return (
                        <div
                            style={Object.assign({}, styles.shortcutContainer, {
                                top: i * 104,
                            })}
                            key={shortcut.shortcutName}
                        >
                            <DesktopShortcut
                                icon={shortcut.icon}
                                shortcutName={shortcut.shortcutName}
                                onOpen={shortcut.onOpen}
                            />
                        </div>
                    );
                })}
            </div>
            <Toolbar
                windows={windows}
                toggleMinimize={toggleMinimize}
                shutdown={startShutdown}
            />
        </div>
    ) : (
        <ShutdownSequence
            setShutdown={setShutdown}
            numShutdowns={numShutdowns}
        />
    );
};

type StyleSheetCSS = { [key: string]: React.CSSProperties };

const styles: StyleSheetCSS = {
    desktop: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: Colors.turquoise,
    },
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
    },
    shortcutContainer: {
        position: 'absolute',
    },
    shortcuts: {
        position: 'absolute',
        top: 16,
        left: 6,
    },
    minimized: {
        pointerEvents: 'none',
        opacity: 0,
    },
};

export default Desktop;
