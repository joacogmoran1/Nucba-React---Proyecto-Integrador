import { useContext } from 'react';

// Contexts
import { MenuAndCartToggleContext } from '../../context/MenuAndCartToggle.jsx';

// Components
import Link from '../ui/Link/Link.jsx';

// Icons
import { AiOutlineAlignRight } from "react-icons/ai";

// Style
import style from './Menu.module.css';




export default function Menu() {
    const { menuToggle, handleMenuToggle } = useContext(MenuAndCartToggleContext);
    
    return <div className={style.nav}>
        <AiOutlineAlignRight className={style.nav_icon} onClick={handleMenuToggle} />
        <nav className={[style.nav_links, menuToggle? style.nav_links_open : style.nav_links_closed].join(' ')}>
            <Link to='/' text='Home' />
            <Link to='/about' text='about' />
            <Link to='/wines' text='wines' />
            <Link to='/contact' text='contact' />
        </nav>
    </div>
}