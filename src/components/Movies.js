import { useEffect, useState } from "react";
import { httpsHelp } from "./helper/httpsHelp";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import NotFound from "./NotFound";

const Movies = ({search}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect (() => {
    setIsLoading(true);
    const searchURL = search 
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
      httpsHelp(searchURL).then((data) => {
        setMovies(prevMovies => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <NotFound/>
  }

  return (
    <InfiniteScroll 
      dataLength={movies.length} 
      hasMore={hasMore} 
      next={() => setPage((prevPage) => prevPage + 1)} 
      loader={<Loading/>}
    >     
      <div>
        <ul className={styles.movies}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </ul>
      </div>
    </InfiniteScroll>   
  );
}

export default Movies;
