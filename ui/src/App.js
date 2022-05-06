import logo from './logo.svg';
import './App.css';
import React from 'react';
const apiURL = 'http://localhost:3090/';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
  };
  componentDidMount() {
    fetch('http://localhost:3090/movies').then(res => res.json()).then(json => {
      debugger
      if(json.movies && json.movies.length > 0) {
        this.setState({ movieList: json.movies });
      }
    })
  }
  render() {
    const { movieList } = this.state;
    console.log(movieList);
    return (
      <div className="App">
        <div className="movie_list_container">
          {
            movieList && movieList.length > 0 && movieList.map((m, k) => [
              <div key={k} className="movies">
                <div className="movie_name">{m.name || 'NA'}</div>
                <div className="movie_rating">{m.rating || 'NA'}</div>
                <div className="released_on">{m.releasedOn || 'NA'}</div>
              </div>
            ])
          }
        </div>
      </div>
    );
  }
}

export default App;
