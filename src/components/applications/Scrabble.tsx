// src/apps/ScrabbleApp.tsx

import React, { useState, useEffect } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface ScrabbleAppProps extends WindowAppProps {}

const ScrabbleApp: React.FC<ScrabbleAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    // Toca o som ao abrir a janela
    useEffect(() => {
      const audio = new window.Audio("/sound-opengames.mp3");
      audio.currentTime = 0;
      audio.volume = 0.93;
      audio.play().catch(() => {});
    }, []);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Scrabble"
            windowBarIcon="windowGameIcon"
            windowBarColor="#941d13"
            bottomLeftText={'Powered by JSDOS & DOSBox'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            minimizeWindow={props.onMinimize}
        >
            <DosPlayer
                width={width}
                height={height}
                bundleUrl="scrabble.jsdos"
            />
        </Window>
    );
};

export default ScrabbleApp;
