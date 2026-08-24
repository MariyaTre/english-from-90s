import './App.css'
import logoButton from './assets/logoButton.png'

function App() {
    return (
        <main className="desktop">
            <div className="workspace">
            </div>
            <footer className="bottom-panel">
                <img className="logoButton"
                     src={logoButton}
                     alt="logoButton" />
            </footer>
        </main>
    )
}

export default App
