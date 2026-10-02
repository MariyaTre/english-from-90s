import folder from '@/assets/folder.png'
import document from '@/assets/Document.png'

/**
 * 
 * Тут разбивка на компоненты
 * так в будущем будет проще их поддерживать
 * так как если отредактировать их тут, то они изменятся везде где используются
 * и в местах использования будет сразу видно что это такое
 * 
 * И да
 * в js функции можно передавать как переменные
 * 
 */

export function Folder({ name, open }) {
    return (
        <div className="folder" key={name}>
            <img className="folder-img"
                src={folder}
                alt={folder}
                onClick={() => open(name)} />
            <p className="folder-text">{name}</p>
        </div>
    )
}

export function Document({ name, open }) {
    return (
        <div className="document" key={name}>
            <img className="document-img"
                src={document}
                alt={document}
                onClick={() => open(name)} />
            <p className="document-text">{name}</p>
        </div>
    )
}


/**
 * 
 * Так как сейчас папка и файл имеют одинаковую разметку
 * а классы содержат имя элемента
 * мы можем сделать общий компонент и просто передавать тип элемента
 * 
 * А так как стили почти 1 в 1
 * можно их объеденить, и не собирать отдельно, но пока оставим так
 * 
 * Конструкция `${variable}-img` говорит js "подставь в строку содержимое переменной variable"
 * 
 * element='document' обозначает значение по умолчанию
 * т.е. если не передать ничего, то в element попадет строка document
 */
export function Element({ name, open, element='document' }) {
    const icons = {
        folder: folder,
        document // эта и предыдущая строки делают одно и тоже, только эта строка короче
    }
    return (
        <div className={`${element}`} key={name}>
            <img className={`${element}-img`}
                src={icons[element]}
                alt={icons[element]}
                onClick={() => open(name)} />
            <p className={`${element}-text`}>{name}</p>
        </div>
    )
}