import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import NewsCOm from './components/NewsCom';
import Footer from './components/footer';
import Login from './components/login';

class App extends Component {
  state = { 

   } 
  render() { 
    
    return (
      <>
        <NavBar/>
        <h1 id='headline'>Top Headlines </h1>
        <hr></hr>
        {/*<Login/>*/}
        <NewsCOm/>
        <Footer/>
      </>
    );
  }
}
 
export default App;
