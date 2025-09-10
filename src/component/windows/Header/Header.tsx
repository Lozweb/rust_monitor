import './Header.css'
import { getCurrentWindow } from "@tauri-apps/api/window";

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
                >_</button>
                <button
                    onClick={handleMaximize}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Maximiser"
                >▢</button>
                <button
                    onClick={handleClose}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Fermer"
                >×</button>
            </div>
        </header>
    )
}