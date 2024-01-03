import { Link,Outlet } from "react-router-dom"
import { useContext } from "react";
import { usercontext } from "./Usercontext";
import { useNavigate } from "react-router-dom";

const Userviewpage =()=>{
    const mynavigate= useNavigate();
    const {validuser,setvaliduser}=useContext(usercontext);

    const logout=()=>{
        setvaliduser("");
        mynavigate("/");

    }

    return(
        <>
            <div style={{height:"22px", backgroundColor:"black", alignItems:"center",color:"white"}}>
                <div style={{float:"right"}}>Welcome to user : {validuser}----
                 <span style={{cursor:"pointer"}} onClick={logout}>logout</span> </div>
            </div>
            <div className="navar">
                <ul>
                    <li><Link to="/userviewpage/home">Home</Link></li>
                    <li><Link to="/userviewpage/skill">Skill</Link></li>
                    <li><Link to="/userviewpage/project">Project</Link></li>
                    <li><Link to="/userviewpage/aboutus">About Us</Link></li>
                    <li><Link to="/userviewpage/contact">Contact</Link></li>
                    
                </ul>
            </div>
            
            <Outlet/>
        </>
    )
}
export default Userviewpage;