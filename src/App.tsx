import './App.css';
import Desktop from './components/os/Desktop';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const handler = () => {
            window.parent.postMessage('playClickSound', '*');
        };
        document.body.addEventListener('mousedown', handler);
        return () => document.body.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div className="App">
            <Desktop />
        </div>
    );
}

export default App;
