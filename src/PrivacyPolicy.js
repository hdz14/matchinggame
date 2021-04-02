import React, { Component } from 'react';

// import { FormErrors } from './FormErrors';
import {withRouter} from 'react-router-dom';
import './PrivacyPolicy.css';
import Header from './Header';

class PrivacyPolicy extends Component {
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
        <div class="policyBg">
            <Header/>
        <section>
            <div className="homeCont grid-container grid-y large-12 medium-12 small-12">
                <div className="contestBox grid-y align-center align-self-top">
                    <h3 >Privacy Policy</h3>
                    <h6>Last updated: January 28, 2021 </h6>
                    <p className="p1">This Privacy Policy describes Our policies and pro-cedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. </p>
                    <p className="p1">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

                    <p>------------------------------------------------</p>
                    <h5>Collecting and Using Your Personal Data</h5>
                    <h6>Types of Data Collected</h6>
                    <p>Personal Data</p>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    
                    <ol>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Usage Data</li>
                    </ol>
                    <button id="backHome" onClick={this.backHome}>Next</button>

                </div>
            </div>
            {/* <h2>Thanks {this.props.location.state.first_name} for your registration!</h2>
            <button id="backHome" onClick={this.backHome}>Back Home</button> */}
        </section>
        </div>
    )
}
}

export default withRouter(PrivacyPolicy);