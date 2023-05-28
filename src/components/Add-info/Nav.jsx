import { Link} from "react-router-dom";
import css from "./Nav.module.css";


export const Navigation = () => {
    return (
        <ul className={css.navigation}>
            <li >
                <Link to="cast" className={css.link}>Cast</Link>
            </li>
            <li>
                <Link to="reviews" className={css.link}>Reviews</Link>
            </li>
        </ul>

    )
}