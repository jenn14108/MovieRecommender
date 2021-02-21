import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../styles/Global.css';


//Main view combines multiple react components
class MainPage extends Component {

  render() {
    return (
      <div className='MainPage'>
        <Header />
        <body> Enter the name of a movie for a list of recommendations: </body>
        <SearchBar />
      </div>
    )
  }
}

export default MainPage;
