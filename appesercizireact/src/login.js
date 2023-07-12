import { useState } from "react";


function Login ({onClick}) {

    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")



    let handleNameChange = (event) => {
        event.preventDefault();
        const value = event.target.value
        
        setUsername (value)
        
        


        const button= document.querySelector("#butt")
        if (username.length && password.length ) {
            button.disabled = false
        } else button.disabled = true
        
    }

    
    let handlePassChange = (event) => {
        event.preventDefault();
        const value = event.target.value
        
        setPassword (value)
        
        


        const button= document.querySelector("#butt")
        if (username.length && password.length ) {
            button.disabled = false
        } else button.disabled = true
        
    }

    let HandleResetState = () => {
        const userIN = document.querySelector("#userIN")
        const passIN = document.querySelector("#passIN")
        userIN.value= ""
        passIN.value= ""
        

        setUsername ("")
        setPassword ("")
        
    }

   
       
        return(
            <div>
                <div>
                    <button id="butt" disabled  onClick={onClick} name="submit" >Login</button>
                    <button onClick={HandleResetState} >reset</button>
                </div>
                <form id="form" action="">
                    <label htmlFor="username">Username</label>
                    <input id="userIN" onChange={handleNameChange} value={username} name="username" type="text" required />
                    <label htmlFor="password">Password</label>
                    <input id="passIN" onChange={handlePassChange} value={password} name="password" type="password" required />
                </form>
                
            </div>
        )
    }


 
export default Login