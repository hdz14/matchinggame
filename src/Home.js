import React, { Component } from 'react';

// import { FormErrors } from './FormErrors';
import {withRouter} from 'react-router-dom';
import './Home.css';
import Header from './Header';
import boardHomepage from './img/boardHomepage.svg';
import playImg from './img/playGame-btn.png';

class Home extends Component {
    constructor(props){
        super(props);
    }
    goToForm = (e) =>{
        e.preventDefault();
        // console.log("Form!");
        this.props.history.push('/form');
    }


    render(){
    return (
        <div class="homeBg">
            <Header/>
                <div className="homeCont large-12 medium-12 small-12">
                    <div className="contestBoxContent">
                        <h3 >Contest Information</h3>
                        <p className="p1">We're giving a way total value up to $16,000 dollars prizes this month!</p>
                        <p className="p2">By winning matching game, you have chance to win worth $10,000 prize!</p>
                    </div>
                    <img className="home-board" src={boardHomepage} alt="contest info board"/>
                    
                    <div className="playBtn">
                        <button onClick={this.goToForm}><img src={playImg} className="playImg" alt="Start Game"/></button>
                    </div>
                </div>
                {/* <h2>Thanks {this.props.location.state.first_name} for your registration!</h2>
                <button id="backHome" onClick={this.backHome}>Back Home</button> */}
        </div>
    )
}
}

export default withRouter(Home);