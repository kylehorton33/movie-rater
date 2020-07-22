import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';

function Auth(){

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoginView, setIsLoginView ] = useState(true);

  const [ token, setToken ] = useCookies(['movie-token']);

  useEffect( () => {
    //console.log(token);
    if(token['movie-token']) window.location.href = '/movies';
  }, [token])

  const loginClicked = () => {
    API.loginUser({username, password})
    .then( resp => setToken('movie-token',resp.token))
    .catch( err => console.log(err) )
  }

  const registerClicked = () => {
    API.registerUser({username, password})
    .then( () => loginClicked() )
    .catch( err => console.log(err) )
  }

  const isDisabled = username.length === 0 || password.length === 0;

  return (
    <div className='App'>
      <header className='App-header'>
        { isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
      </header>
      
      <div className="Login-container">
      <label htmlFor="username">username</label><br/>
          <input id="username" type="text" placeholder="username" value={ username } 
              onChange={ evt => {setUsername(evt.target.value);
                console.log(evt.target.value);} }
          /><br/>
          <label htmlFor="password">password</label><br/>
          <input id="password" type="password" placeholder="password" value={password}
              onChange={ evt => setPassword(evt.target.value)}
          ></input><br/>
          
          { isLoginView ? 
              <button onClick={loginClicked} disabled={isDisabled}>Login</button> : 
              <button onClick={registerClicked} disabled={isDisabled}>Register</button>
            }
          { isLoginView ? 
              <p onClick={() => setIsLoginView(false)}>Don't have an account? Register here!</p> : 
              <p onClick={() => setIsLoginView(true)}>Already have an account? Login here!</p>
            }
      </div>
          
          
          
              
    

          
        </div>
  )
}

export default Auth;