import css from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';


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
