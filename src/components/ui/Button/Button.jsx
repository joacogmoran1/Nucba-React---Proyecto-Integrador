

// Style
import style from './Button.module.css';


export default function Button({ func, disabled=false, text }) {
    return <button
        className={style.button}
        onClick={() => func()}
        disabled={disabled}
    >
        {text}
    </button>
}