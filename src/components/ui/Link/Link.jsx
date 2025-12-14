import { NavLink } from 'react-router';


export default function Link({ to, text }) {
    return <NavLink to={to}>{text}</NavLink>
}