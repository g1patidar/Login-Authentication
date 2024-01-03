import Loginform from "./components/Loginform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registrationform";
import Layout from "./Layout";
import Userviewpage from "./Userviewpage";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact";
import Skill from "./components/Skill"
import Project from "./components/Project"
const App = ()=>{
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Loginform/>}/>
                <Route path="loginform" element={<Loginform/>}/>
                <Route path="signup" element={<Registration/>}/>

              </Route>

              <Route path="/userviewpage" element={<Userviewpage/>}>
                  <Route index element={<Home/>}/>
                  <Route path="home" element={<Home/>}/>
                  <Route path="aboutus" element={<About/>}/>
                  <Route path="contact" element={<Contact/>}/>
                  <Route path="skill" element={<Skill/>}/>
                  <Route path="project" element={<Project/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </>
    )
}
export default App ;
