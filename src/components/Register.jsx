import React from 'react'
import "../styles/register.css"
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // if(Validate()){
        navigate('/home');
    // }
  };
    
  function Validate() {
    var email =
        document.forms.RegForm.EMail.value;
    var password =
        document.forms.RegForm.Password.value;
    var regEmail=/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
    if (email === "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    if (password === "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;

    }
    this.props.history.push('/home')
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Registration</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
          <label for="psw-repeat"><b></b></label>
          <input type="password" placeholder="Retype Password" name="psw-repeat" id="psw-repeat" required/>
          <hr/>
          <button type="submit" class="registerbtn">Register</button>
        </div>
        <div class="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
    </form>
  )
}

export default Register