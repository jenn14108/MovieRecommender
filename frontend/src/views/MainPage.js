import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBarDisplayContainer from '../components/SearchBarDisplayContainer';
import '../styles/Global.css';


//Main view combines multiple react components
class MainPage extends Component {

  render() {
    return (
      <div className='MainPage'>
        <Header />
        <body> Enter the name of a movie for a list of recommendations: </body>
        <SearchBarDisplayContainer />
      </div>
    )
  }
}

export default MainPage;
