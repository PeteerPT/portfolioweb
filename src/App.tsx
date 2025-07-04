// src/App.tsx
import './App.css';
import Desktop from './components/os/Desktop';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        let audioDown: HTMLAudioElement | null = null;
        let audioUp: HTMLAudioElement | null = null;
        let isDown = false;

        const playDown = () => {
            if (isDown) return; // Evita duplo clique
            isDown = true;
            if (!audioDown) {
                audioDown = new window.Audio('/static/audio/mouse/mouse_down.mp3');
                audioDown.volume = 0.75;
            }
            audioDown.currentTime = 0;
            audioDown.play();
        };
        const playUp = () => {
            isDown = false;
            if (!audioUp) {
                audioUp = new window.Audio('/static/audio/mouse/mouse_up.mp3');
                audioUp.volume = 0.82;
            }
            audioUp.currentTime = 0;
            audioUp.play();
        };
        document.body.addEventListener('mousedown', playDown);
        document.body.addEventListener('mouseup', playUp);
        document.body.addEventListener('touchstart', playDown);
        document.body.addEventListener('touchend', playUp);

        return () => {
            document.body.removeEventListener('mousedown', playDown);
            document.body.removeEventListener('mouseup', playUp);
            document.body.removeEventListener('touchstart', playDown);
            document.body.removeEventListener('touchend', playUp);
        };
    }, []);

    return (
        <div className="App">
            <Desktop />
        </div>
    );
}

export default App;
