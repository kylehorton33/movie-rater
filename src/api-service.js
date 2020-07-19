const TOKEN = "a4db63b236737f5d5fe06163a57b83a797ab55e7"

export class API {

  static loginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, { 
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify( body )
       }).then( resp => resp.json() )
  }

  static updateMovie(mov_id, body) {
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, { 
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Token ${TOKEN}`
        },
        body : JSON.stringify( body )
       })
  }

  static createMovie(body) {
    return fetch(`http://127.0.0.1:8000/api/movies/`, { 
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Token ${TOKEN}`
        },
        body : JSON.stringify( body )
       })
  }

  static deleteMovie(mov_id) {
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}`, { 
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Token ${TOKEN}`
        }
       })
  }
}