import './App.css'
import logoButton from './assets/logoButton.png'
import HomeButton from './assets/HomeButton.png'
import EnButton from './assets/EnButton.png'
import ToolsButton from './assets/ToolsButton.png'
import TimeButton from './assets/TimeButton.png'
import folder from './assets/folder.png'
import document from './assets/Document.png'

function App() {
    const folders = [
        'Новая папка 1',
        'Новая папка 2',
        'Новая папка 3'
    ]
const documents = [
    'Новый документ 1',
    'Новый документ 2',
    'Новый документ 3'
]

    return (
        <main className="desktop">
            <div className="workspace">
                {folders.map((folderName) => (
                    <div className="folder" key={folderName}>
                        <img className="folder-img"
                             src={folder}
                             alt={folder}/>
                        <p className="folder-text">{folderName}</p>
                    </div>
                ))}
                {documents.map((folderName) => (
                    <div className="document" key={folderName}>
                        <img className="document-img"
                             src={document}
                             alt={document}/>
                        <p className="document-text">{folderName}</p>
                    </div>
                ))}
            </div>
            <footer className="bottom-panel">
                <div className="left-panel">
                    <img className="logo-button"
                         src={logoButton}
                         alt="logo-button"/>
                    <img className="home-button"
                         src={HomeButton}
                         alt="home-button"/>
                </div>
                <div className="right-panel">
                    <img className="en-button"
                         src={EnButton}
                         alt="en-button"/>
                    <img className="tools-button"
                         src={ToolsButton}
                         alt="tools-button"/>
                    <img className="time-button"
                         src={TimeButton}
                         alt="time-button"/>
                </div>
            </footer>
        </main>
    )
}

export default App
