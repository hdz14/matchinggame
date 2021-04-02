import React, { Component } from 'react';

// import { FormErrors } from './FormErrors';
import {withRouter} from 'react-router-dom';
import './Home.css';
import Header from './Header';
import './Instructions.css';

class Instructions extends Component {
    constructor(props){
        super(props);
    }
    goToThanks = (e) =>{
        e.preventDefault();
        // console.log("Thanks!");
        this.props.history.push({
            pathname:'/game',
            state:{
                salutation:this.props.location.state.salutation,
                first_name:this.props.location.state.first_name,
                last_name:this.props.location.state.last_name
            }
            });
    }


    render(){
    return (
        <div class="instructionsBg">
            <Header/>
        <section>
            <div class="welcomeName">
                    <h3>Hi {this.props.location.state.salutation} {this.props.location.state.first_name} {this.props.location.state.last_name},</h3>
                </div>
            <div className="homeCont grid-container grid-y large-12 medium-12 small-12">
                <div className="contestBox grid-y align-center align-self-top">
                    <h3 >Game Instructions</h3><br/>
                    <p className="p1">Hi {this.props.location.state.first_name}! Welcome to the Matching Game. The game consists of 10 tiles, make five matches by selecting two same images within 20 seconds. </p>
                    <button id="goToThanks" onClick={this.goToThanks}>Next</button>
                </div>
                <div className="DetailsDiv grid-y large-12 medium-12 small-12 align-center">
                    <div className="totalMatch grid-y align-center align-self-top">
                        <h3 >Total Matches</h3>
                        <p className="p1">0</p>
                    </div>
                    <div className="timeCount grid-y align-center align-self-top">
                        <h3 >Time</h3>
                        <p className="p1">20s</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
}

export default withRouter(Instructions);