import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom';
import './header.css';
import logo from './img/logo.svg';



class Header extends Component{
    
    render(){
    return (
        <header className="App-header" id="headerId">
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
        
    )
}
}
export default Header;