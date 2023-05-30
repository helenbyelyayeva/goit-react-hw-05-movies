import { Link, useLocation } from "react-router-dom";
import css from "./Nav.module.css";

export const Navigation = () => {
    const location = useLocation();
    const state = location.state || {}; 

    return (
        <ul className={css.navigation}>
            <li >
                <Link to="cast"
                    state={{
                        from: state.from,
                        label: state.label,
                    }}
                    className={css.link}>Cast</Link>
            </li>
            <li>
                <Link to="reviews"
                    state={{
                        from: state.from,
                        label: state.label,
                    }}
                    className={css.link}>Reviews</Link>
            </li>
        </ul>
    );
}
