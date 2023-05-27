import propTypes from 'prop-types';
import { useState } from 'react';
import css from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';


export const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ query });
        setQuery('');
    };

    return (
        <form className={css.search_form} onSubmit={handleSubmit}>
            <input
                name="query"
                type="text"
                value={query}
                onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
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

Searchbar.propTypes = {
    onSubmit: propTypes.func.isRequired,
};