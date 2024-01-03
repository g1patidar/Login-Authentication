
import { createContext } from "react";
import { useState } from "react";

const usercontext= createContext();

const Userprovider=({children})=>{

    const [validuser, setvaliduser]=useState("");

    return(
        <>
           <usercontext.Provider value={{validuser,setvaliduser}}>
            {children}
            </usercontext.Provider> 
        </>
    );
}

export {usercontext, Userprovider};
