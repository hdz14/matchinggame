
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Thanks.css';

class Thanks extends Component {
    constructor(props){
        super(props);
    }
    backHome = (e) =>{
        e.preventDefault();
        console.log("Back Home!");
        this.props.history.push('/');
    }


    render(){
    return (
        <section>
            <h2>Thanks {this.props.location.state.first_name} for your registration!</h2>
            <button id="backHome" onClick={this.backHome}>Back Home</button>
        </section>
    )
}
}

export default withRouter(Thanks);