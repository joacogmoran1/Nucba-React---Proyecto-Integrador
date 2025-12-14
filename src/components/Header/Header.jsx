
// Components
import Menu from '../Menu/Menu.jsx';
import Cart from '../Cart/Cart.jsx';

// Styles
import style from './Header.module.css';


export default function Header() {
    return <header className={style.header}>
        <span className={style.title}>Wine Club</span>
        <div className={style.container}>
            <Menu />
            <Cart />
        </div>
    </header>
}