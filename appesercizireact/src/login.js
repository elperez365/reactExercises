import React from "react";
import { createRef } from "react";

class Login extends React.Component {
    state ={
        username: "",
        password: "",
        completed: false, 
    }

   

    handleInputChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        this.setState ({
            [name]: value
        })
        const button= document.querySelector("#butt")
        if (this.state.username.length && this.state.password.length ) {
            button.disabled = false
        } else button.disabled = true
        
    }

    _formRef=createRef();

    HandleResetState = () => {
            this._formRef.current[0].value="";
            this._formRef.current[1].value="";
            this._formRef.current[2].checked=false;
            console.log (this._formRef)
        }
    

    

    render() {
       
        return(
            <div>
                <div>
                    <button id="butt" disabled  onClick={this.props.onClick} name="submit" >Login</button>
                    <button onClick={this.HandleResetState} >reset</button>
                </div>
                <form ref= {this._formRef} id="form" onChange={this.handleInputChange} action="">
                    <label htmlFor="username">Username</label>
                    <input id="userIN" name="username" type="text" required />
                    <label htmlFor="password">Password</label>
                    <input id="passIN" name="password" type="password" required />
                    <input id="compIN" name="completed" type="checkbox" />
                </form>
                
            </div>
        )
    }
}

 
export default Login