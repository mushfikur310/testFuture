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
    return (
      <div className="App">
        <div className="movie_list_container">
          {
            movieList && movieList.length > 0 && movieList.map((m, k) => [
              <div key={k} className="movies">
                <div style={{ marginBottom: '25px', fontSize: '25px' }}>Movie Name: <span className="movie_name">{m.name || 'NA'}</span></div>
                <div style={{ marginBottom: '20px', fontSize: '25px' }}>Rating: <span className="movie_rating">{m.rating || 'NA'}</span></div>
                <div style={{ marginBottom: '20px', fontSize: '25px' }}>Released On: <span className="released_on">{m.releasedOn || 'NA'}</span></div>
              </div>
            ])
          }
          {
            movieList && movieList.length === 0 && <div>Movies not available!</div>
          }
        </div>
      </div>
    );
  }
}

export default App;
