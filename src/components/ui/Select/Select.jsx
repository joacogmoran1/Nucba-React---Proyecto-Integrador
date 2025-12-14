
// Style
import style from './Select.module.css';


export default function Select({ arrayOfOptions, func }) {
    return <select className={style.select} onChange={func}>
        <option value="all">Todos</option>
        {
            arrayOfOptions.length > 1 && arrayOfOptions.map(
                (item, index) => <option
                    key={index} value={item}
                >
                    {item}
                </option>
            )
        }
    </select>
}