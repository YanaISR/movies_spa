import { MovieItem } from "./MovieItem";


function MovieList(props) {
    const {movieList = []} = props;

    return (
        <section className = "movies">
            {
                movieList.length ? movieList.map(movie => <MovieItem key={movie.imdbID} {...movie} />) : <h3>Nothing found</h3>
            }
            
        </section>
    )
}

export { MovieList };