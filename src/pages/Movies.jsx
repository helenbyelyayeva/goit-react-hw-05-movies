import { Searchbar } from "../components/Search/Search";
import { Section } from "../components/Section/Section";
import { searchMovies } from "Api/Api";
import { MovieList } from "components/Movies/MovieList";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



export const Movies = () => {
  const [searchQuery, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const movieName = searchParams.get('query') ?? '';

  const handleSubmit = ({ query }) => {
    if (!query) {
      toast.info('Remember to enter a movie name before searching');
      setSearch([]);
      return;
    }
    setSearchParams({ query: query.toLowerCase() });
  };

  const onSearchMovie = async () => {
    try {
      const searchMovie = await searchMovies(movieName);
      if (searchMovie.length === 0) {
        toast.error('Nothing was found. Try again', {
          toastId: 'error1',
        });
      }
      setSearch(searchMovie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movieName) {
      onSearchMovie();
    }
  }, [movieName]);

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      <ToastContainer autoClose={2000} />
      <Section>
        {searchQuery && <MovieList films={searchQuery} />}
      </Section>
    </main>
  );
};



export default Movies;
