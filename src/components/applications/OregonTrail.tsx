import React, { useState, useEffect } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface OregonTrailAppProps extends WindowAppProps {}

const OregonTrailApp: React.FC<OregonTrailAppProps> = (props) => {
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
            windowTitle="The Oregon Trail"
            windowBarIcon="windowGameIcon"
            windowBarColor="#240C00"
            bottomLeftText={'Powered by JSDOS & DOSBox'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl="trail.jsdos" />
        </Window>
    );
};

export default OregonTrailApp;
