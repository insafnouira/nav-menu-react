import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import './App.css';
import Routes from './routes';
import Navmenu from './navmenu';


class App extends Component {
  render() {
    return (
      <div className="App">
       
         <BrowserRouter>
          <Navmenu/>
          <Routes/>
         </BrowserRouter>
         
      </div>
    );
  }
}

export default App;
