import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getMovieDetails } from "Api/Api";
import css from "./Details.module.css";
import noimage from '../images/noposter.jpg'

export const Details = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const onDetalisMovie = async () => {
            //   setLoading(true);
            try {
                const details = await getMovieDetails(movieId);
                setMovie(details);
            } catch (error) {
                console.log(error);
            } finally {
                //     setLoading(false);
            }
        };
        onDetalisMovie();
    }, [movieId]);

    return (
        <main>
            {movie && (
                <div className={css.details}>
                    <img  className={css.poster}
                        src={ movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : noimage}
                        alt={movie.original_title}
                    />
                    <div>
                        <h1>
                            {movie.title} ({movie.release_date.slice(0, 4)})
                        </h1>
                        <p>User score: {movie.popularity}</p>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                        <h2>Genres</h2>
                        <ul className={css.genres}>
                            {movie.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </main>
    )
}