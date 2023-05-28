import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from "./MovieList.module.css";
export const MovieList = ({ films }) => {
    const location = useLocation();

    return (
        <ul>
            {films &&
                films.map(film => (
                    <li className={css.movie_item} key={film.id}>
                        <Link className={css.link} to={`/movies/${film.id}`} state={{ from: location }}>
                            {film.title}
                        </Link>
                    </li>
                ))}
        </ul>

    );
};

MovieList.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};