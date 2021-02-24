import React, { Component } from 'react';
import { Button, Form, Input, } from "reactstrap";
import FontAwesome from '@fortawesome/react-fontawesome';
import '../styles/Global.css';
import '../styles/SearchBar.css';
import axios from "axios";

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie: '',
    };
    this.keyPress = this.keyPress.bind(this);
    this.retrieveMovie = this.retrieveMovie.bind(this);
    this.setSearchResult = this.setSearchResult.bind(this);
  }

  keyPress(e) {
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
      console.log("this is the retrieved movie data: ", movie);
      this.setSearchResult(movie);
    }))
    .catch(error => {
      console.log("there was an error retrieving the movie requested!", error);
    });
  }

  setSearchResult(movieResults) {
    this.props.onSearch(movieResults);
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
