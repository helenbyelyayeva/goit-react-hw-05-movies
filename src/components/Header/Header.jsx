// import { NavLink } from 'react-router-dom';
// import style from './Header.module.css';
import css from "./Header.module.css";
export function Header() {
    return (
        <header className={css.header}>
            <nav className={css.navigatian}>
            <a className={css.link}href="url">home</a>
            <a className={css.link}href="url">movies</a>
            </nav>
        </header>
    //     <nav className={style.header}>
    //     <NavLink to="/" className={style.link}>
    //         Home
    //     </NavLink>

    //     <NavLink to="/movies" className={style.link}>
    //         Movies
    //     </NavLink>
    // </nav>
    )
};