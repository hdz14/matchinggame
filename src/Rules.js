import React, { Component } from 'react';

// import { FormErrors } from './FormErrors';
import {withRouter} from 'react-router-dom';
import './Rules.css';
import Header from './Header';
import RluesBg from './img/boardRules.svg';

class Rules extends Component {
    constructor(props){
        super(props)
        this.state = {
        salutation: '',
        first_name: '',
        last_name: ''
        }
    }
    goToInst = (e) =>{
        e.preventDefault();
        // console.log("Instruction");
        this.props.history.push({
            pathname:'/instructions',
            state:{
                salutation:this.props.location.state.salutation,
                first_name:this.props.location.state.first_name,
                last_name:this.props.location.state.last_name
            }
            });
    }


    render(){
    return (
        <div class="rulesBg">
            <Header/>
            <section className="grid-x gameRulesContainer">
                <div className="grid-x large-12 medium-12 small-12 gameRules">
                    <div class="welcomeName large-12 medium-12 small-12">
                        <h3>Hi {this.props.location.state.salutation} {this.props.location.state.first_name} {this.props.location.state.last_name},</h3>
                    </div>
                    <div className="gameRulesContent large-12 medium-12 small-12">
                        <h3 >Game Rules</h3>
                        <h6>Prizes</h6>
                        <p className="p1">1 prize of 10,000 BuyMore Dollars</p>
                        <p className="p1">5 prizes of 750 BuyMore Dollars</p>
                        <p className="p1">10 prizes of 100 BuyMore Dollars</p>
                        <p className="p2">100 prizes of 20 BuyMore Dollars</p>

                        <p>------------------------------------------------</p>
                        <h6>How to Play</h6>
                        <p>The game consists of 10 tiles, make five matches by selecting same two images within 20 seconds.</p>
                        <p>------------------------------------------------</p>
                        <h6>Rules and Regulations</h6>
                        <ol>
                            <li>Play the Matching Game. If you win, answer a skill testing question, then enjoy your prize.</li>
                            <li>If you loss, you have chance to get a coupon</li>
                            <li>This contest will be online for 3 weeks. From April 1, 2021 to April 15, 2021. During this time, you will be able to play after 48 hours if you have won; you will be able to play after 24 hours if you lose.</li>
                        </ol>
                        <button id="gotoInstruction" onClick={this.goToInst}>Next</button>

                    </div>
                    
                </div>
                <img className="rules-board" src={RluesBg} alt="game rules board"/>
                {/* <h2>Thanks {this.props.location.state.first_name} for your registration!</h2>
                <button id="backHome" onClick={this.backHome}>Back Home</button> */}
            </section>
        </div>
    )
}
}

export default withRouter(Rules);