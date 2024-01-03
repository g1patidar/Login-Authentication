
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Loginform.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { usercontext } from "../Usercontext";

function Loginform() {

  const {setvaliduser}=useContext(usercontext);

  const mynavigate= useNavigate();
  const [email, setemail]= useState("");
  const [pwd, setpwd]= useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errormsg, seterrormsg]= useState("");
  const [errmsg, seterrmsg]= useState("");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    axios.post("http://localhost:4000/finddata",{email:email}).then((res)=>{

    if(res.data.length === 0){
        setemail("")
        setpwd("")
        seterrmsg("Username is not exist please resigter");
    }
    else{
      if(res.data[0].password===pwd){
        setIsSubmitted(true);
        setvaliduser(res.data[0].name);
        setTimeout(()=>{mynavigate("/userviewpage")},1000)
      }
      else{
        setpwd("")
        seterrormsg("Invalid password");

      }
    }
    })
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="email" value={email} onChange={(e)=>{setemail(e.target.value)
          seterrmsg("")}} required />
          <div style={{color:"red", fontSize:"10px"}}>{errmsg}</div>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" value={pwd} name="password" onChange={(e)=>{setpwd(e.target.value) 
          seterrormsg("")}} required />
          <div style={{color:"red", fontSize:"10px"}}>{errormsg}</div>
        </div>
        <Link to="/signup">New registration</Link>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in </div> : renderForm}
      </div>
    </div>
  );
}

export default Loginform;