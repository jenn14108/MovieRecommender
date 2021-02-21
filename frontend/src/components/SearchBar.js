import React, { Component } from 'react';
import { Button, Form, Input, } from "reactstrap";
import FontAwesome from '@fortawesome/react-fontawesome';
import '../styles/Global.css';
import '../styles/SearchBar.css'
import axios from "axios";

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {movie: "", movieResults: []};
    this.handleChange = this.handleChange.bind(this);
    this.checkKeyPressForSubmission = this.checkKeyPressForSubmission.bind(this);
    this.retrieveMovie = this.retrieveMovie.bind(this);
  }

  //handles the update of the value typed into the search bar
  handleChange = e => {
    this.setState({movie: e.target.value});
    console.log("input has changed: " + e);
  };

  checkKeyPressForSubmission(pressedButton) {
    // 13 = identifier for the enter key
    if (pressedButton.keyCode == 13) {
      console.log("enter was pressed!");
    }
  };

  //this is where we connect react to django backend
  retrieveMovie = e => {
    e.preventDefault();
    axios.get('http://localhost:8000/api/movies/', this.state)
    .then((response =>
      this.setState({movieResults: response.data}),
      console.log("movieResults", this.movieResults)))
    .catch(error => {
      console.log("there was an error retrieving the movie requested for!" + e);
    });
  }

  render() {
    return(
      <div className='searchBar'>
        <Form onSubmit={this.retrieveMovie}>
          <input
            name="movie"
            movie = {this.state.movie}
            onKeyPress={this.checkKeyPressForSubmission}
            placeholder='eg. Kubo and the Two Strings'
            />
        </Form>
      </div>
    )
  }
}

export default SearchBar;
