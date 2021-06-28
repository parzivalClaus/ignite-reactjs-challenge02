import { MovieCard } from '../components/MovieCard';
import { Header } from '../components/Header';

interface MoviesArray {
  imdbID: number,
  Title: string,
  Poster: string,
  Runtime: string,
  Ratings: Array<{
    Value: string,
  }>,
}

interface ContentProps {
  selectedGenre: {
    title: string;
  }
  movies: Array<MoviesArray>;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">

      <Header selectedGenre={props.selectedGenre} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}