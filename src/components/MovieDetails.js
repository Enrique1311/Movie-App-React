import { useParams } from "react-router";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { httpsHelp } from "./helper/httpsHelp";
import imgDetails from "./helper/imgDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    httpsHelp("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Loading/>
  }
  
  const imageUrl = imgDetails(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map(genre => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
