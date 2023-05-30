import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'Api/Api';
import css from "./Cast.module.css";
import noimage from '../images/noposter.jpg'

export const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        const getCasts = async () => {
            try {
                const { cast } = await getCast(movieId);
                setActors(cast);
            }
            catch (error) {
                console.log(error);
            }
        };
        getCasts();
    }, [movieId]);

    return (
        <div className={css.container}>
            {actors.length === 0 ? (
                <p>We don't have any information about movie cast</p>
            ) : (
                <ul className={css.cast}>
                    {actors.map(actor => (
                        <li key={actor.id} className={css.actor_card}>
                            <img className={css.actor_img}
                                src={actor.profile_path ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path : noimage}
                                alt={actor.original_name}
                            />
                            <p>{actor.name}</p>
                            <p>Character:{actor.character}</p>
                        </li>
                    ))}
                </ul>)
            }
        </div>
    );
};

export default Cast;