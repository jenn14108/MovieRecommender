import React, { Component } from 'react';
import { Button, Form, Input, } from "reactstrap";
import FontAwesome from '@fortawesome/react-fontawesome';
import '../styles/Global.css';
import '../styles/SearchBar.css'
import axios from "axios";

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {movie: '', movieResult: []};
    this.keyPress = this.keyPress.bind(this);
    this.retrieveMovie = this.retrieveMovie.bind(this);
  }



  keyPress(e) {
    // 13 = identifier for the enter key
    if (e.key === 'Enter') {
      console.log("enter was pressed! Saving user input: " + e.target.value);
      // setState is async, need call back for logging
      this.setState({
        movie:e.target.value
      }, function() {
        console.log("User input saved! Current movie title searched for: " + this.state.movie);
        this.retrieveMovie();
      })
    }
  };

  //this is where we connect react to django backend
  retrieveMovie() {
    console.log("getting ready to make a call to the backend for movie title = ", this.state.movie);
    const url = 'http://localhost:8000/api/movies/title';
    axios.get(
      url, {
        params: {
          title: this.state.movie
        }
      }, {
      headers: {
        'Content-Type': 'application/json'
      }})
    .then((response => {
      const movie = response.data;
      this.setState({
        movieResult: movie
      }, function() {
        console.log("http call movie result: ", this.state.movieResult);
      });
    }))
    .catch(error => {
      console.log("there was an error retrieving the movie requested!");
    });
  }

  render() {
    return(
      <div className='searchBar'>
        <input
          name="movie"
          onKeyDown={this.keyPress}
          placeholder='eg. Kubo and the Two Strings'
          />
      </div>
    )
  }
}

export default SearchBar;
