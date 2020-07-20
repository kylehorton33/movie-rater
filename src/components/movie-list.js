import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../api-service'
import { useCookies } from 'react-cookie'

function MovieList(props){

  const [ token ] = useCookies(['movie-token']);

  const movieClicked = movie => evt => {
    props.movieClicked(movie)
  }
  
  const editClicked = movie => evt => {
    props.editClicked(movie)
    console.log(`You are now editing: ${movie.title}`)
  }

  const removeClicked = movie => evt => {
    API.deleteMovie(movie.id , token['movie-token'])
    .then( () => props.removeClicked(movie) )
    .catch( err => console.log(err) )
    
    //console.log(`You are now editing: ${movie.title}`)
  }

  return (
    <div>
      { props.movies && props.movies.map( movie => {
        return (
          <div key={movie.id} className="movie-item">
            <h2 onClick={movieClicked(movie)}>{ movie.title }</h2>
            <FontAwesomeIcon icon={faEdit} onClick={editClicked(movie)}/>
            <FontAwesomeIcon icon={faTrash} onClick={removeClicked(movie)}/>
          </div>
        )
      }) }
    </div>
  )
}

export default MovieList;