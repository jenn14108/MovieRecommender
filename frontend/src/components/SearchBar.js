import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import '../styles/Global.css';
import '../styles/SearchBar.css'

class SearchBar extends Component {

  // handle changes by checking key press

  render() {
    return(
      <div className='searchBar'>
        <input
          placeholder='eg. kubo and the two strings'
        />
      </div>
    )
  }
}

export default SearchBar;
