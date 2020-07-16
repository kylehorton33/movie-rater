import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect( () => {
      fetch("http://127.0.0.1:8000/api/movies/", { 
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : 'Token a4db63b236737f5d5fe06163a57b83a797ab55e7'
        }
       })
       .then( resp => resp.json())
       .then( resp => setMovie(resp))
       .catch( err => console.log(err))
  }, [] )

  const movieClicked = movie => {
    //console.log(movie.title);
    setSelectedMovie(movie);
  }

  const loadMovie = movie => {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE RATING APP</h1>
        
      </header>
      <div className="layout">
          <MovieList movies={movies} movieClicked={movieClicked}/>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
      </div>
    </div>
  );
}

export default App;
