import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "./hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("search");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDafault();
  };
    
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.search}>
          <input className={styles.searchInput}
            type="text" 
            value={search} 
            placeholder="Movie Title"
            aria-label="Search Movies"
            onChange={(e) => {
              const value = e.target.value;
              history.push("/?search=" + value);              
            }}
          />
          <FaSearch size={20} className={styles.searchIcon} type="submit"/>
      </div>
    </form>
  )
}

export default Search
