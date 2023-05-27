import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import css from "./Header.module.css";
export const Header = () =>{
    return (
        <>
            <header className={css.header}>
                <nav className={css.navigatian}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? css.active : css.link)}>
                        home
                    </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => (isActive ? css.active : css.link)}>
                        movies
                    </NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
};