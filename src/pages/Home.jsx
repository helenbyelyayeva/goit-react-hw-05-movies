import React, { useEffect, useState } from 'react';
import { MovieList } from "../components/Movies/MovieList";
import { fetchTrendingMovies } from 'Api/Api';
import { Section } from 'components/Section/Section';
// import Loader from 'components/Loader/Loader';

export const Home = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const FetchTrendingFilms = async () => {
            setLoading(true);
            try {
                const trendingFilms = await fetchTrendingMovies();
                setFilms(trendingFilms);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        FetchTrendingFilms();
    }, []);

    return (
        <main>
            <Section title={'Trending today'}>
                {films && < MovieList films={films} />}
            </Section>
        </main>
    );
};

