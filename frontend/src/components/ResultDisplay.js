import React, { Component } from 'react';
import { Button, Form, Input, } from "reactstrap";
import FontAwesome from '@fortawesome/react-fontawesome';
import '../styles/Global.css';

class ResultDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: this.props.searchResultsToDisplay
    }
  }

  async componentWillReceiveProps(nextProps) {
    console.log("ResultDisplay component received updated props: " , nextProps);
    if (this.props != nextProps){
      this.setState((nextProps), function() {
        console.log("Updated searchResults props in ResultDisplay component: " + this.props.searchResultsToDisplay);
      })
    }
  }

  render() {
    return (
        console.log("in render method: ", this.state),
        <div className="col">
          {this.props.searchResultsToDisplay.map(movie => <div>{movie.title}</div>)}
          {this.props.searchResultsToDisplay.map(movie => <div>{movie.genre}</div>)}
          {this.props.searchResultsToDisplay.map(movie => <div><img src={movie.movie_poster}/></div>)}
        </div>
      );
  }
}

export default ResultDisplay;
