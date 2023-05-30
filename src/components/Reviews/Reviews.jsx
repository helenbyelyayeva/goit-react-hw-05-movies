import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';
import css from "./Reviews.module.css";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        const getInfo = async () => {
            try {
                const { results } = await getReviews(movieId);
                setReviews(results);
            } catch (error) {
                console.log(error);
            }
        };
        getInfo();
    }, [movieId]);


    return (
        <div className={css.container}>
            {reviews.length === 0 ? (
                <p>We don't have any reviews for this movie</p>
            ) : (
                <>
                    <ul className={css.list}>
                        {reviews.map(review => (
                            <li key={review.id}>
                                <p className={css.nick}>{review.author}</p>
                                <p>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
export default Reviews;