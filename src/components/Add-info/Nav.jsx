import { Link, useLocation } from "react-router-dom";
import css from "./Nav.module.css";

export const Navigation = () => {
    const location = useLocation();
    return (
        <ul className={css.navigation}>
            <li >
                <Link to="cast"
                    state={{
                        from: location.state.from,
                        label: location.state.label,
                    }}
                    className={css.link}>Cast</Link>
            </li>
            <li>
                <Link to="reviews"
                    state={{
                        from: location.state.from,
                        label: location.state.label,
                    }}
                    className={css.link}>Reviews</Link>
            </li>
        </ul>

    )
}