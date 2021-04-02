// import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import NameForm from './NameForm';

import React, { Component } from 'react';
import { render } from 'react-dom';

// import Header from './Header';

import Form from './SignupForm';
import Thanks from './Thanks';
import Game from './Game';

import './App.css';
import { //curly braces coz multiple things to import
  HashRouter as Router,//determine url//router is the nickname of browserrouter
  Switch,//something look in between router and tell us where to go 
  Route, //indvisual rout in router
  Link // for Navigation 
} from "react-router-dom";
//when we don't write ./ before the location of import that means it live in node_modules 


class App extends Component{

  render(){
  return (
  <Router>
    <div className="App">
    {/* <Header/> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Sign Up</Link>
          </li>
          <li>
            <Link to="/rules">Rules</Link>
          </li>
          <li>
            <Link to="/instructions">Instructions</Link>
          </li>
          <li>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/thanks" children={<Thanks/>}/>
        <Route path="/form" children={<Form/>}/>
        <Route path="/game" children={<Game/>}/>

      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
