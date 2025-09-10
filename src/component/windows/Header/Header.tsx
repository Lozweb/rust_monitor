import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="window-title">
                <span className="window-title-font">Titre de la fenêtre</span>
            </div>
            <div className="window-controls">
                <button className="window-controls-button hover:bg-gray-600 bg-gray-800" aria-label="Minimiser">_</button>
                <button className="window-controls-button hover:bg-gray-600 bg-gray-800" aria-label="Maximiser">▢</button>
                <button className="window-controls-button hover:bg-gray-600 bg-gray-800" aria-label="Fermer">×</button>
            </div>
        </header>
    )
}