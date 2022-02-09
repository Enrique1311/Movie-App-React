import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import LandingPage from "./components/LandingPage";
import Search from "./components/Search"

export default function App() {
  return (
    <Router>
      <header className={styles.header}>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        <Search/>
        <Link to="/"><h5 className={styles.home}>Home</h5></Link>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

