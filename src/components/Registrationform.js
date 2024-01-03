import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Registration.css";
import axios from "axios";

const Registration=()=>{

    const [input ,setinput]= useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errormsg, seterrormsg]= useState("");
  

  const inputhandle=(e)=>{
    let name = e.target.name;
    let value= e.target.value;

    setinput(values=>({...values,[name]:value}));
}

const handleSubmit=(e)=>{

    e.preventDefault();
    axios.post("http://localhost:4000/insert",input).then((res)=>{
        if(res.data.length===1){
            seterrormsg("already exist")
            setIsSubmitted(true)
        }
        else{
            axios.post("http://localhost:4000/insertuserdata",input).then(()=>{alert("data inserted")})
            setIsSubmitted(true)
        }
    });
    
}


    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
          <div className="input-container">
              <label>Name </label>
              <input type="text" name="name" value={input.name} onChange={inputhandle}   required />
            </div>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="email" value={input.email} onChange={inputhandle}  required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" value={input.password} onChange={inputhandle}  required />
            </div>
            
            <div className="button-container">
              <input type="submit" value="Registration" />
            </div>
          </form>
        </div>
      );
    
      return (
        <div className="app">
          <div className="login-form">
            <div className="title">Registration Form</div>
            <div style={{color:"red"}}>{errormsg}</div>
            {isSubmitted ? <div>User is successfully Registered <Link to="/loginform">Login Now</Link></div> : renderForm}
          </div>
        </div>
      );
}
export default Registration;