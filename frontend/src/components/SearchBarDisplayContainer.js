import React, { Component } from 'react';
import { Button, Form, Input, } from "reactstrap";
import FontAwesome from '@fortawesome/react-fontawesome';
import '../styles/Global.css';
import SearchBar from './SearchBar';
import ResultDisplay from './ResultDisplay';

class SearchBarDisplayContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        searchResults: []
      }
      this.search = this.search.bind(this)
    }

    search(results) {
      this.setState({
        searchResults: results
      }, function() {
        console.log("saved search results in SearchBarDisplayContainer: ", this.state.searchResults);
      })
    }

    render() {
      return (
        <div>
          <SearchBar onSearch={this.search}/>
          <ResultDisplay searchResultsToDisplay={this.state.searchResults} />
        </div>
      )
    }
}


export default SearchBarDisplayContainer;
