import React, { useState } from 'react'

function MovieForm(props) {


  const [ title , setTitle ] = useState(props.movie.title);
  const [ description , setDescription ] = useState(props.movie.description);

  const updateClicked = () => {
    console.log('update here')
  }

  return (
    <React.Fragment>
      { props.movie ? (
        <div>
          <label htmlFor="title">Title</label><br/>
          <input id="title" type="text" placeholder="title" value={title}
              onChange={ evt => setTitle(evt.target.value)}
          /><br/>
          <label htmlFor="description">Description</label><br/>
          <textarea id="description" type="text" placeholder="description" value={description}
              onChange={ evt => setDescription(evt.target.value)}
          ></textarea><br/>
          <button onClick={ updateClicked }>Update</button>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default MovieForm;