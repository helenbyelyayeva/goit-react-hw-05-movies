import { Link } from "react-router-dom";
import css from "./Nav.module.css";
import { useLocation } from "react-router-dom";

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