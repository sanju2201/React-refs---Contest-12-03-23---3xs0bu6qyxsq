import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css';
const App = () => {

  const emailRef = useRef();
  const passRef = useRef();

  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const [displayMessage, setDisplayMessage] = useState({ emailMsg: "", passwordMeg: "" });

  const handleInputChange = (e) => {
    e.persist();
    if (e.target.id === "inputEmail") {
      setInputValue((state) => {
        return { ...state, ["email"]: e.target.value };
      })

    } else {
      setInputValue((state) => {
        return { ...state, ["password"]: e.target.value };
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.email === "") {
      emailRef.current.focus();
      setDisplayMessage({ emailMsg: "", passwordMeg: "" });
    } else if (inputValue.password === "") {
      passRef.current.focus();
      setDisplayMessage({ emailMsg: "", passwordMeg: "" });
    } else {
      setDisplayMessage({ emailMsg: inputValue.email, passwordMeg: inputValue.password });
      setInputValue({ email: "", password: "" });
    }

  }
  //code here 

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={inputValue.email} ref={emailRef} onChange={handleInputChange} /><br />
      Password
      <input id="inputPassword" type="text" value={inputValue.password} ref={passRef} onChange={handleInputChange} /><br />
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br />
      <p id="emailText">Your Email : {displayMessage.emailMsg}</p>
      <p id="passwordText">Your Password : {displayMessage.passwordMeg}</p>

    </div>
  )
}


export default App;
