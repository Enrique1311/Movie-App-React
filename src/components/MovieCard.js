import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import imgDetails from "./helper/imgDetails";

const MovieCard = ({movie}) => {
  const imageUrl = imgDetails(movie.poster_path, 300);

  return (
    <div>
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img className={styles.movieImage} src={imageUrl} alt={movie.title}/>
          <div>{movie.title}</div>
        </Link>
      </li>
    </div>
  )
}

export default MovieCard;
