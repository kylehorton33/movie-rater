import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){

  const [highlighted , setHighlighted] = useState(-1);

  let mov = props.movie

  const highlightRate = high => evt => {
    setHighlighted(high)
  }

  const rateClicked = rate => evt => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, { 
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : 'Token a4db63b236737f5d5fe06163a57b83a797ab55e7'
        },
        body : JSON.stringify({
          stars : rate+1
        })
       })
       .then( () => getDetails() )

       .catch( err => console.log(err))
  }

  const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, { 
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : 'Token a4db63b236737f5d5fe06163a57b83a797ab55e7'
        },
       })
       .then( resp => resp.json())
       .then( resp => props.updateMovie(resp))
       .catch( err => console.log(err))
  }

  

  return (
    <React.Fragment>
      { mov ? (
        <div>
          <h1>{mov && props.movie.title }</h1>
          <p>{mov && mov.description }</p>
          <FontAwesomeIcon icon={faStar} className={mov.average_rating > 0 ? "gold" : ''}/>
          <FontAwesomeIcon icon={faStar} className={mov.average_rating > 1 ? "gold" : ''}/>
          <FontAwesomeIcon icon={faStar} className={mov.average_rating > 2 ? "gold" : ''}/>
          <FontAwesomeIcon icon={faStar} className={mov.average_rating > 3 ? "gold" : ''}/>
          <FontAwesomeIcon icon={faStar} className={mov.average_rating > 4 ? "gold" : ''}/>
          ({mov.number_of_ratings})
          <div className="rate-container">
            <h2>RATE IT</h2>
            {
              [...Array(5)].map( (e,i) => {
              return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i-1 ? "gray" : ''}
                      onMouseEnter={highlightRate(i)}
                      onMouseLeave={highlightRate(-1)}
                      onClick={rateClicked(i)}
                />
              } )
            }
          </div>
        </div>
        
      ) : null }
      
    </React.Fragment>
  )
}

export default MovieDetails;