import React, { Component } from 'react';

import { FormErrors } from './FormErrors';
import {withRouter} from 'react-router-dom';
import './signup.css';


class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
        salutation: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        main_add: '',
        sec_add: '',
        city: '',
        province: '',
        postal_code: '',
        
        formErrors: {salutation: '',first_name: '',last_name: '',phone_number: '',email: '',main_add: '',city: '',province: '',postal_code: '',birth_date: ''},
        salutationValid: false,
        firstNameValid: false,
        lastNameValid: false,
        phoneNumberValid: false,
        emailValid: false,
        mainAddValid: false,
        cityValid: false,
        provinceValid: false,
        postalCodeValid: false,
        birthDateValid: false,
        formValid: false,

        salutError:'',
        firstNameError:'',
        lastNameError:'',
        phoneNumberError:'',
        emailError:'',
        mainAddError:'',
        cityError:'',
        provinceError:'',
        postalCodeError:'',
        

        /*for checkBox */
        checkbox1:false,
        checkbox2:false,
        checkbox3:false,
        checkBoxValid1:false,
        checkBoxValid2:false,
        checkBoxValid3:false,
        checkBoxError1:'',
        checkBoxError2:'',
        checkBoxError3:'',
        
        }
    }
    /* If every thing is working properly then will go to Thank you Page */
    onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log("Thank you user!");
        this.props.history.push({
            pathname:'/thanks',
            state:{
                first_name:this.state.first_name
            }
            });
    }

    /* functions to validate fields values*/
    updateCheckbox = (e) => {
            const name = e.target.name;
            const checked = e.target.checked ;
            this.setState({[name]: checked},
                () => { this.validateField(name, checked) });
};

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value)});
    }
  
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let salutationValid = this.state.salutationValid;
      let firstNameValid = this.state.firstNameValid;
      let lastNameValid = this.state.lastNameValid;
      let phoneNumberValid = this.state.phoneNumberValid;
      let emailValid = this.state.emailValid;
      let mainAddValid = this.state.mainAddValid;
      let cityValid = this.state.cityValid;
      let provinceValid = this.state.provinceValid;
      let postalCodeValid = this.state.postalCodeValid;
        let checkBoxValid1 = this.state.checkBoxValid1;
        let checkBoxValid2 = this.state.checkBoxValid2;
        let checkBoxValid3 = this.state.checkBoxValid3;

      let salutError = this.state.salutError;
      let firstNameError = this.state.firstNameError;
      let lastNameError = this.state.lastNameError;
      let phoneNumberError = this.state.phoneNumberError;
      let emailError = this.state.emailError;
      let mainAddError = this.state.mainAddError;
      let cityError = this.state.cityError;
      let provinceError = this.state.provinceError;
      let postalCodeError = this.state.postalCodeError;
      let checkBoxError1 = this.state.checkBoxError1;
      let checkBoxError2 = this.state.checkBoxError2;
      let checkBoxError3 = this.state.checkBoxError3;


  
      switch(fieldName) {
        case 'salutation':
            salutationValid = !value.match("none");
            fieldValidationErrors.salutation = salutationValid ? '' : 'Salutation is not selected';
            salutError = fieldValidationErrors.salutation;
            break;
        case 'first_name':
            firstNameValid = value.match(/^[a-zA-Z]+$/i);
            fieldValidationErrors.first_name = firstNameValid ? '': 'First Name is invalid';
            firstNameError = fieldValidationErrors.first_name;
            break;
        case 'last_name':
            lastNameValid = value.match(/^[a-zA-Z]+$/i);
            fieldValidationErrors.last_name = lastNameValid ? '': 'Last Name is invalid';
            lastNameError = fieldValidationErrors.last_name;
        break;
        case 'phone_number':
            phoneNumberValid = value.match(/^[1-9]{3}[-]?[1-9]{3}[-]?[1-9]{4}$/i);
            fieldValidationErrors.phone_number = phoneNumberValid ? '': 'Phone Number is invalid';
            phoneNumberError = fieldValidationErrors.phone_number;
        break;
        case 'email':
            emailValid =value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/i);
            fieldValidationErrors.email= emailValid ? '': 'Email Address is invalid';
            emailError = fieldValidationErrors.email;
        break;
        case 'main_add':
            mainAddValid = value.match(/^[\w ]+$/i);
            fieldValidationErrors.main_add = mainAddValid ? '': 'Address is invalid';
            mainAddError = fieldValidationErrors.main_add;
        break;
        case 'city':
            cityValid = value.match(/^[a-zA-Z]+$/i);
            fieldValidationErrors.city = cityValid ? '': 'City is invalid';
            cityError = fieldValidationErrors.city;
        break;
        case 'province':
            provinceValid = !value.match("none");
            fieldValidationErrors.province = provinceValid ? '': 'Province is not selected';
            provinceError = fieldValidationErrors.province;
        break;
        case 'postal_code':
            postalCodeValid = value.match(/^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ ]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/i);
            fieldValidationErrors.postal_code = postalCodeValid ? '': 'Postal Code is invalid';
            postalCodeError = fieldValidationErrors.postal_code;
        break;
        case 'checkbox1':
            checkBoxValid1 = value;
            fieldValidationErrors.checkbox1 = checkBoxValid1 ? '' : "checkbox1 is unchecked";
            checkBoxError1 = fieldValidationErrors.checkbox1;
        break;
        case 'checkbox2':
            checkBoxValid2 = value;
            fieldValidationErrors.checkbox2 = checkBoxValid2 ? '' : "checkbox2 is unchecked";
            checkBoxError2 = fieldValidationErrors.checkbox2;
        break;
        case 'checkbox3':
            checkBoxValid3 = value;
            fieldValidationErrors.checkbox3 = checkBoxValid3 ? '' : "checkbox3 is unchecked";
            checkBoxError3 = fieldValidationErrors.checkbox3;
        break;

        default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    salutationValid:  salutationValid,
                    firstNameValid: firstNameValid,
                    lastNameValid : lastNameValid ,
                    phoneNumberValid: phoneNumberValid,
                    emailValid: emailValid,
                    mainAddValid : mainAddValid ,
                    cityValid: cityValid,
                    provinceValid: provinceValid,
                    postalCodeValid: postalCodeValid,
                    checkBoxValid1:checkBoxValid1,
                    checkBoxValid2:checkBoxValid2,
                    checkBoxValid3:checkBoxValid3,

                    salutError:salutError,           
                    firstNameError : firstNameError,
                    lastNameError : lastNameError,
                    phoneNumberError : phoneNumberError,
                    emailError : emailError,
                    mainAddError: mainAddError,
                    cityError : cityError,
                    provinceError : provinceError,
                    postalCodeError : postalCodeError,
                    checkBoxError1 : checkBoxError1,
                    checkBoxError2 : checkBoxError2,
                    checkBoxError3 : checkBoxError3,
                    
                    }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.salutationValid && this.state.firstNameValid
                        && this.state.lastNameValid && this.state.phoneNumberValid
                        && this.state.emailValid && this.state.mainAddValid
                        && this.state.cityValid && this.state.provinceValid
                        && this.state.postalCodeValid && this.state.checkBoxValid1 
                        && this.state.checkBoxValid2 && this.state.checkBoxValid3 
                    });
    }
    // errorClass(name,error) {
    //     if (error.length != 0 ){
    //         name.field.style.borderColor = "red";
    //     }
    //     return;
    // }
    render(){
        
    return (
        <main className="grid-x mainBg align-center ">
            
            <section className=" grid-x large-12 medium-12 small-12">
                <form className="formData large-6 large-offset-3  medium-8 medium-offset-2 small-12" id="signup_form" action="#" onSubmit={this.onSubmitHandler}>
                <div className="grid-x large-1 large-offset-11  medium-1 medium-offset-11 small-1 small-offset-11  alignRight align-self-bottom"><h5 className="closeBtn">X</h5></div>
                <div className="grid-x large-12 medium-12 small-4 small-offset-5 "><h3 className="formHeader">Sign Up</h3></div>
                {/* <div className="grid-x">
                    <FormErrors formErrors={this.state.formErrors} />
                </div> */}
                <section className="grid-x">
                <label className="small-5 medium-5 large-3 align-self-middle " htmlFor="salutation"><p>Salutation<span>*</span></p></label>
                <select className="small-7 small-offset-0 medium-7 large-3 large-offset-0" id="salutation" name="salutation" required value={this.state.salutation} onChange={this.handleUserInput} >
                    <option value="none">-- Select --</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                </select>
                <p className="small-7 small-offset-5 medium-7 medium-offset-5 large-5 large-offset-1 align-self-middle errorText" id="salutError" name="salutError" >{this.state.salutError}</p>
                <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="first_name"><p>First Name<span>*</span></p></label>
                <input type="text" id="first_name" className="small-7 small-offset-0 medium-7 medium-offset-0 large-9 textInput" name="first_name" placeholder="First Name" required value={this.state.first_name} onChange={this.handleUserInput}/>
                <p className="small-7 small-offset-5 medium-7 medium-offset-5 large-9 large-offset-3 errorText" name="firstNameError">{this.state.firstNameError}</p>
                <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="last_name"><p>Last Name<span>*</span></p></label>
                <input type="text" id="last_name" className="small-7 small-offset-0 medium-7 medium-offset-0 large-9 textInput" name="last_name" placeholder="Last Name" required value={this.state.last_name} onChange={this.handleUserInput}/>
                <p className="small-7 small-offset-5 medium-7 medium-offset-5 large-9 large-offset-3 errorText" name="lastNameError">{this.state.lastNameError}</p>
                <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="phone_number"><p>Phone<span>*</span></p></label>
                <input className="small-7 small-offset-0 medium-7 medium-offset-0 large-9 textInput" type="text" id="phone_number" name="phone_number" placeholder="(     )-(     )-(       )" required value={this.state.phone_number} onChange={this.handleUserInput}/>
                <p className="small-7 small-offset-5 medium-7 medium-offset-5 large-9 large-offset-3 errorText" name="phoneNumberError">{this.state.phoneNumberError}</p>
                <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="email"><p>Email<span>*</span></p></label>
                <input className="small-7 small-offset-0 medium-7 medium-offset-0 large-9 textInput" type="text" id="email" name="email" placeholder="ex:john.doe@gmail.com" required value={this.state.email} onChange={this.handleUserInput}/>
                <p className="small-7 small-offset-5 medium-7 medium-offset-5 large-9 large-offset-3 errorText" name="emailError">{this.state.emailError}</p>
                <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="main_add"><p>Address Line1<span>*</span></p></label>
                <input className="small-7 small-offset-0 medium-7 medium-offset-0 large-9 textInput" type="text" id="main_add" name="main_add" placeholder="Address Line 1"  required value={this.state.main_add} onChange={this.handleUserInput}/>
                <p className="small-7 small-offset-5 medium-7 medium-offset-5 large-9 large-offset-3 errorText" name= "mainAddError">{this.state.mainAddError}</p>
                <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="sec_add"><p>Address Line2 </p></label>
                <input className="small-7 small-offset-0 medium-7 medium-offset-0 large-9 textInput" type="text" id="sec_add" name="sec_add" placeholder="Address Line 2" value={this.state.sec_add} onChange={this.handleUserInput}/>
                <input className="small-4 medium-4 large-4  textInput" type="text" id="city" name="city" placeholder="City*"  required value={this.state.city} onChange={this.handleUserInput}/>
                <select className="small-4 medium-4 large-4" id="province" name="province" required value={this.state.province} onChange={this.handleUserInput}>
                            <option value="none">-- Select --</option>
                            <option value="AB">AB</option>
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NS">NS</option>
                            <option value="PE">PE</option>
                            <option value="ON">ON</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                            <option value="NU">NU</option>
                            <option value="UT">UT</option>
                            <option value="NT">NT</option>
                        </select>
                        <input className="small-4 medium-4 large-4  textInput" type="text" id="postal_code" name="postal_code" placeholder="Postal Code*"  required value={this.state.postal_code} onChange={this.handleUserInput}/>
                        <p className="small-4 medium-4 large-4 errorText" name="cityError">{this.state.cityError}</p>
                        <p className="small-4 medium-4 large-4 errorText" name="provinceError">{this.state.provinceError}</p>
                        <p className="small-4 medium-4 large-4 errorText" name="postalCodeError">{this.state.postalCodeError}</p>
                        <label className="small-5 medium-5 large-3 align-self-middle" htmlFor="birth_date"><p>Birth Date<span>*</span></p></label>
                        <input className="small-6 medium-6 large-8" type="date" id="birth_date" name="birth_date" placeholder="YYYY-MM-DD" required value={this.state.birth_date} onChange={this.handleUserInput}/>
                        <span className="small-1 medium-1 large-1" class="validity"></span>
                        {/* <p className="small-12 medium-12 large-9 large-offset-3 errorText" id="birthDateError"></p> */}
                        <input className="small-1 medium-1 large-1 forCheckbox" id="checkBox1" name="checkbox1" type="checkbox" value="Privacy Policy" onChange={this.updateCheckbox} checked={this.state.checkbox1}/>
                        <label className="small-10 medium-10 large-10" htmlFor="checkbox1"><p class="checkP">I agree to the <span class="checkTxt">Privacy Policy</span> and BuyMore Dollars <span class="checkTxt">Terms and
                            Conditions</span><span>*</span></p></label>
                        <input className="small-1 medium-1 large-1 forCheckbox" id="checkBox2" name="checkbox2" type="checkbox" value="Official Rules & Regulations" onChange={this.updateCheckbox} checked={this.state.checkbox2}/>
                        <label className="small-10 medium-10 large-10" htmlFor="checkbox2"><p class="checkP">I read, understand, and agree on Official <span class="checkTxt">Rules & Regulations</span><span>*</span></p></label>
                        <input className="small-1 medium-1 large-1 forCheckbox" id="checkBox3" name="checkbox3" type="checkbox" value="biweekly deals" onChange={this.updateCheckbox} checked={this.state.checkbox3}/>
                        <label className="small-10 medium-10 large-10" htmlFor="checkBox3"><p class="checkP">I agree to receive biweekly deals from BuyMore Dollars<span>*</span></p></label>
                        <p className="small-12 medium-12 large-12 errorText" name="checkBoxError1">{this.state.checkBoxError1}</p>
                        <p className="small-12 medium-12 large-12 errorText" name="checkBoxError2">{this.state.checkBoxError2}</p>
                        <p className="small-12 medium-12 large-12 errorText" name="checkBoxError3">{this.state.checkBoxError3}</p>
                        <input className="small-8 small-offset-2 medium-4 medium-offset-4 large-4 large-offset-4" type="submit" id="formBtn" value="Sign Up" disabled={!this.state.formValid}/>

            </section>
        </form>
        </section>
        </main>
    )
}
}

export default withRouter(Form);