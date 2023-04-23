// import  React, { useState, useEffect } from 'react';
import  React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { InputSearch } from '../components/InputSearch';



class Main extends React.Component {
    state = {
        movieList: [],
        loading: true,
    }

    componentDidMount() {
        let url = 'http://www.omdbapi.com/?apikey=49615eb9&s=Titanic';
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    searchMovies = (stringSearch, type = 'all') => {
        let url = `http://www.omdbapi.com/?apikey=49615eb9&s=${stringSearch}${type !== 'all' ? `&type=${type}`: ``}`;
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({movieList: data.Search}))
    }

    render() {
        const {movieList, loading} = this.state;
        return (
            <main className="content container main">
                <InputSearch searchMovies={this.searchMovies} />
                {
                    loading ?  <Preloader /> : (<MovieList movieList={movieList}/>)
                }
            </main>
        )
    }
}

// function Main() {
//     const [movieList, setMovieList] = useState([]);

//     useEffect(() => {
//         fetch('http://www.omdbapi.com/?apikey=49615eb9&s=Serial')
//         .then(response => response.json())
//         .then(data => setMovieList(data.Search))}
    
//     )
//     return (
//         <main className="content container">
//             {
//                 movieList.length ? (<MovieList movieList={movieList}/>) : <h3>Loading...</h3>
//             }
//         </main>
//     )
   
// }
export { Main } ;