import React from 'react';
import Window from '../os/Window';

export interface MusicAppProps extends WindowAppProps {}

const SPOTIFY_PLAYLIST_SRC =
  'https://open.spotify.com/embed/playlist/3tS1AoQ8LsNExgadatraDm?utm_source=generator';

const retroFontUrl =
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';

const MusicApp: React.FC<MusicAppProps> = (props) => {
  return (
    <Window
      width={380}
      height={550}
      top={80}
      left={360}
      windowBarIcon="cdIcon"
      windowTitle="Music Player"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText="© Copyright 2025 Pedro Oliveira"
    >
      <link href={retroFontUrl} rel="stylesheet" />
      {/* ...seu conteúdo retro permanece igual... */}
      {/* Exemplo de container: */}
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#f3f3f3",
        boxSizing: "border-box",
        padding: "16px 12px 8px 12px"
      }}>
        <div style={{
          fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
          fontSize: 20,
          fontWeight: "bold",
          color: "#111",
          textShadow: "1px 1px 0 #fff, 2px 2px 0 #bfbfbf",
          marginBottom: 14,
          marginTop: 0,
          textAlign: "center",
          width: "100%",
          lineHeight: 1.2,
          userSelect: "none"
        }}>
          My Favorite Songs
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 10,
          marginTop: 2,
        }}>
          <span style={{
            fontSize: 13,
            fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
            color: "#222",
            marginTop: 3,
            letterSpacing: 0.5,
          }}></span>
        </div>
        <div style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "stretch",
          minHeight: 180,
        }}>
          <div style={{
            background: "#222",
            borderRadius: 10,
            border: "2px solid #999",
            boxShadow: "0 0 0 2px #fff",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "stretch",
            justifyContent: "stretch",
            overflow: "hidden"
          }}>
            <iframe
              src={SPOTIFY_PLAYLIST_SRC}
              title="Spotify Playlist"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 80,
                borderRadius: 10,
                background: 'transparent',
                border: 'none',
                flex: "1 1 auto"
              }}
            ></iframe>
          </div>
        </div>
        <div style={{
          fontSize: 10,
          color: "#444",
          marginTop: 10,
          fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
          textAlign: "center",
          letterSpacing: ".05em",
          userSelect: "none"
        }}>
          Spotify playlist&nbsp;
          <a
            href="https://open.spotify.com/playlist/3tS1AoQ8LsNExgadatraDm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2e3cff", textDecoration: "underline" }}
          >
            Open in Spotify
          </a>
        </div>
      </div>
    </Window>
  );
};

export default MusicApp;