import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';
import css from "./Reviews.module.css";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        const getCast = async () => {
            const { results } = await getReviews(movieId);
            setReviews(results);
        };
        getCast();
    }, [movieId]);


    return (
        <div className={css.container}>
            {reviews.length === 0 ? (
                <p>We don't have any reviews for this movie</p>
            ) : (
                <>
                    <ul className={css.list}>
                        {reviews.map(reviev => (
                            <li key={reviev.id}>
                                <p className={css.nick}>{reviev.author}</p>
                                <p>{reviev.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}