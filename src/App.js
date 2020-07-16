import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [movies, setMovie] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
        
      </header>
      <div className="layout">
          <div>
            { movies.map( movie => {
              return <h2>{ movie.title }</h2>
            }) }
          </div>
          <div>Details</div>
      </div>
    </div>
  );
}

export default App;
