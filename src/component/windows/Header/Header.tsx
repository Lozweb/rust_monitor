import './Header.css'
import {getCurrentWindow} from "@tauri-apps/api/window";

export default function Header() {
    const handleMinimize = async () => {
        const win = getCurrentWindow();
        await win.minimize();
    }
    const handleMaximize = async () => {
        const win = getCurrentWindow();
        await win.toggleMaximize();
    }
    const handleClose = async () => {
        const win = getCurrentWindow();
        await win.close();
    }
    return (
        <header
            onDoubleClick={handleMaximize}
            className="header"
        >
            <div className="window-title">
                <span className="window-title-font">Titre de la fenêtre</span>
            </div>
            <div className="window-controls">
                <button
                    onClick={handleMinimize}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Minimiser"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
                         className="window-controls-icon window-controls-icon-light">
                        <rect x="2" y="7" width="12" height="2" fill="currentColor"/>
                    </svg>
                </button>
                <button
                    onClick={handleMaximize}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Maximiser"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
                         className="window-controls-icon window-controls-icon-light">
                        <rect x="3" y="3" width="10" height="10" rx="2" fill="currentColor"/>
                    </svg>
                </button>
                <button
                    onClick={handleClose}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Fermer"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
                         className="window-controls-icon window-controls-icon-light">
                        <line x1="4" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="4" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}