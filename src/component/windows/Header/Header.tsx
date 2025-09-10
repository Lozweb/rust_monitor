import './Header.css'
import {getCurrentWindow} from "@tauri-apps/api/window";

type Controle = "minimize" | "maximize" | "close" | "drag";
export default function Header() {
    const handleMouseDown = async (e: React.MouseEvent, action: Controle) => {
        const win = getCurrentWindow();
        switch (action) {
            case "minimize" :
                await win.minimize();
                break;
            case "maximize" :
                await win.toggleMaximize()
                break;
            case "close":
                await win.close();
                break;
            case "drag":
                if (e.button === 0) await win.startDragging();
                break;
        }
    }

    return (
        <header
            data-tauri-drag-region
            onMouseDown={(e) => handleMouseDown(e, "drag")}
            className="header"
        >
            <div className="window-title">
                <span className="window-title-font">Rust Monitor</span>
            </div>
            <div className="window-controls">
                <button
                    onMouseDown={(e) => handleMouseDown(e, "minimize")}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Minimiser"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
                         className="window-controls-icon window-controls-icon-light">
                        <rect x="2" y="7" width="12" height="2" fill="currentColor"/>
                    </svg>
                </button>
                <button
                    onMouseDown={(e) => handleMouseDown(e, "maximize")}
                    className="window-controls-button hover:bg-gray-600 bg-gray-800"
                    aria-label="Maximiser"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
                         className="window-controls-icon window-controls-icon-light">
                        <rect x="3" y="3" width="10" height="10" rx="2" fill="currentColor"/>
                    </svg>
                </button>
                <button
                    onMouseDown={(e) => handleMouseDown(e, "close")}
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