import React, { useEffect, useState } from 'react';
import { MovieList } from "../components/Movies/MovieList";
import { fetchTrendingMovies } from 'Api/Api';
import { Section } from '../components/Section/Section';

export const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const FetchTrendingFilms = async () => {
            try {
                const trendingFilms = await fetchTrendingMovies();
                setFilms(trendingFilms);
            } catch (error) {
                console.log(error);
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

export default Home;