import propTypes from 'prop-types';
import css from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export const Searchbar = () => {

    return (
        <form className={css.search_form} >
            <input
                name="query"
                type="text"
                className={css.search_input}
                autoComplete="off"
                autoFocus
                placeholder="Search movie..."
            />
            <button className={css.search_btn} type="submit" >
                <FaSearch />
            </button>
        </form>
    );

}

// Searchbar.propTypes = {
//     onSubmit: propTypes.func.isRequired,
// };

//  const [searchQuery, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState('null');
//   const [largeImageUrl, setLargeImageUrl] = useState('');
//   const [isButtonVisible, setVisibility] = useState('');
//   const [loading, setLoading] = useState('');
//   const per_page = 12;

//   useEffect(() => {
//     getImages(searchQuery, page);
//   }, [searchQuery, page]);

//   const getImages = async (search, page) => {
//     if (!search) {
//       return;
//     } setLoading('true');
//     try {
//       const { hits, totalHits } = await fetchImages(search, page);
//       if (search.length === 0 || totalHits === 0) {
//         toast.error('Nothing was found :(');
//         setVisibility('');
//         return;
//       } else if (page === 1) {
//         toast.success(`${totalHits} images were found`);
//       }
//       setItems(prevItems => [...prevItems, ...hits]);
//       setVisibility('true' && page < Math.ceil(totalHits / per_page));
//     } catch (error) {
//       setError(error.message);
//     }
//     finally {
//       setLoading('false');
//     }
//   }


//   const handleFormSubmit = ({ query }) => {
//     if (query.trim() === '') {
//       toast.error('Please enter some data');
//       setItems([]);
//       setVisibility('');
//       return;
//     }
//     setSearch(query);
//     setPage(1);
//     setItems([]);
//   };
