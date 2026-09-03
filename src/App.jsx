import './App.css'
import logoButton from './assets/logoButton.png'
import HomeButton from './assets/HomeButton.png'
import EnButton from './assets/EnButton.png'
import ToolsButton from './assets/ToolsButton.png'
import TimeButton from './assets/TimeButton.png'
import folder from './assets/folder.png'
import document from './assets/Document.png'
import {useState} from 'react'
import pencil from './assets/pencil.png'
import hand from './assets/hand.png'

function App() {

    const [openedFolder, setOpenFolder] = useState('')
    const [openedDocument, setOpenDocument] = useState('')


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

    const folderContents = {
        'Новая папка 1': ['Новый документ 1', 'Новый документ 2'],
        'Новая папка 2': ['Новый документ 3'],
        'Новая папка 3': []
    }
    const tableContents = [
        {
            'english': 'Monday',
            'russian': 'Понедельник',
            'englishExample': 'I start my week with a busy Monday',
            'russianExample': 'Я начинаю свою неделю с загруженного понедельника'
        }
    ]

    function openFolder(folderName) {
        console.log('Папка открыта', folderName);
        setOpenFolder(folderName);
    }

    function openDocument(documentName) {
        console.log('Документ открыт', documentName);
        setOpenDocument(documentName);
    }

    function goHome() {
        setOpenFolder('');
        setOpenDocument('');
    }


    return (
        <main className="desktop">
            <div className="workspace">
                {openedFolder
                    ? <div className="folder-window">
                        <div className="folder-window-header">
                            <span className="folder-window-title">
                                {openedFolder}
                            </span>
                            <button className="folder-window-header-button"
                                    onClick={() => openFolder('')}>
                                ×
                            </button>
                        </div>
                        <div className="folder-window-content">
                            {folderContents[openedFolder].length === 0
                                ? <p className="folder-window-content-p">Папка пуста</p>
                                : folderContents[openedFolder].map((documentName) => (
                                    <div className="document" key={documentName}>
                                        <img className="document-img"
                                             src={document}
                                             alt={document}
                                             onClick={() => openDocument(documentName)}/>
                                        <p className="document-text">{documentName}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    : null
                }
                {openedDocument
                    ? <div className="document-window">
                        <div className="document-window-header">
                            <span className="document-window-title">
                                {openedDocument}
                            </span>
                            <button className="document-window-header-button"
                                    onClick={() => openDocument('')}>
                                ×
                            </button>
                        </div>
                        <div className="document-window-content">
                            <div className="content-top">
                                <button className="bottom-play">
                                    Играть
                                </button>
                                <button className="bottom-training">
                                    Тренировка
                                </button>
                                <div className="content-top-input-field">
                                    <p className="workout-sequence">
                                        Последовательность тренировки
                                    </p>
                                </div>
                                <button className="bottom-pencil">
                                    <img className="pencil"
                                         src={pencil}
                                         alt={pencil}/>
                                </button>
                            </div>
                            <div className="content-table">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Английский</th>
                                        <th>Русский</th>
                                        <th>Английский пример</th>
                                        <th>Русский пример</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {tableContents.map((row, index) => (
                                    <tr key={row.english}>
                                        <td>{index + 1}.</td>
                                        <td>
                                            <img className="hand-img"
                                                 src={hand}
                                                 alt={hand}/>
                                        </td>
                                        <td>{row.english}</td>
                                        <td>{row.russian}</td>
                                        <td>{row.englishExample}</td>
                                        <td>{row.russianExample}</td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="content-bottom">
                                <button className="button-add">
                                    Добавить
                                </button>
                                <button className="button-delete">
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                    : null}
                {folders.map((folderName) => (
                    <div className="folder" key={folderName}>
                        <img className="folder-img"
                             src={folder}
                             alt={folder}
                             onClick={() => openFolder(folderName)}/>
                        <p className="folder-text">{folderName}</p>
                    </div>
                ))}
                {documents.map((documentName) => (
                    <div className="document" key={documentName}>
                        <img className="document-img"
                             src={document}
                             alt={document}
                             onClick={() => openDocument(documentName)}/>
                        <p className="document-text">{documentName}</p>
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
                         alt="home-button"
                         onClick={goHome}/>
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
