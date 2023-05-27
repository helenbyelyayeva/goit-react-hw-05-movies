import { Searchbar } from "../components/Search/Search";
import { Section } from "../components/Section/Section";
import { searchMovies } from "Api/Api";
import { MovieList } from "components/Movies/MovieList";
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Movies = () => {
  const [searchQuery, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const movieName = searchParams.get('query') ?? '';
  // const [loading, setLoading] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    if (query === '') {
      toast.error('Please enter some data');
      return;
    }

    setSearchParams({ query: query.toLowerCase() });
  };

  const onSearchMovie = async () => {
    // setLoading(true);
    try {
      if (movieName.trim() === '') {
        toast.error('Please enter some data');
        return;
      }
      
      const searchMovie = await searchMovies(movieName);

      if (searchMovie.length === 0) {
        toast.error('Nothing found');
        return;
      }

      setSearch(searchMovie);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    onSearchMovie();
  }, [movieName]);

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      <Section>{searchQuery && <MovieList films={searchQuery} />}</Section>
      <ToastContainer autoClose={2000} />
    </main>
  );
};
