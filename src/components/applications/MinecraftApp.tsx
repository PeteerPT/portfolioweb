import React, { useState } from "react";
import Window from "../os/Window";

export interface MinecraftAppProps extends WindowAppProps {}

const MINECRAFT_URL = "https://classic.minecraft.net/";

const MinecraftApp: React.FC<MinecraftAppProps> = (props) => {
  const [loaded, setLoaded] = useState(false);

  // Toca o som ao abrir a janela
  React.useEffect(() => {
    const audio = new window.Audio("/sound-opengames.mp3");
    audio.currentTime = 0;
    audio.volume = 0.93;
    audio.play().catch(() => {}); // ignora erro de autoplay
  }, []);

  return (
    <Window
      width={800}
      height={600}
      top={60}
      left={120}
      windowBarIcon="minecraftIcon"
      windowTitle="Minecraft Classic"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText="Minecraft Classic in Browser"
    >
      {/* Loading overlay */}
      {!loaded && (
        <div style={{
          position: "absolute",
          zIndex: 2,
          top: 0, left: 0, right: 0, bottom: 0,
          background: "#000c",
          color: "#fff",
          fontFamily: "monospace",
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          Loading Minecraft...
        </div>
      )}
      <iframe
        src={MINECRAFT_URL}
        title="Minecraft Classic"
        width="100%"
        height="100%"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </Window>
  );
};

export default MinecraftApp;
