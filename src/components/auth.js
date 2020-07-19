import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';

function Auth(){

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ token, setToken ] = useCookies(['movie-token']);

  useEffect( () => {
    console.log(token);
    if(token['movie-token']) window.location.href = '/movies';
  }, [token])

  const loginClicked = () => {
    API.loginUser({username, password})
    .then( resp => setToken('movie-token',resp.token))
    .catch( err => console.log(err) )
  }

  return (
    <div>
          <label htmlFor="username">username</label><br/>
          <input id="username" type="text" placeholder="username" value={ username } 
              onChange={ evt => {setUsername(evt.target.value);
                console.log(evt.target.value);} }
          /><br/>
          <label htmlFor="password">password</label><br/>
          <input id="password" type="password" placeholder="password" value={password}
              onChange={ evt => setPassword(evt.target.value)}
          ></input><br/>
          <button onClick={loginClicked}>Login</button>
              
    

          
        </div>
  )
}

export default Auth;