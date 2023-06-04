import React from "react";

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

    HandleResetState = () => {
        const userIN = document.querySelector("#userIN")
        const passIN = document.querySelector("#passIN")
        const compIN = document.querySelector("#compIN")
        userIN.value= ""
        passIN.value= ""
        compIN.checked= false
        this.setState({
            username: "",
            password: "",
            completed: false,         
        })
    }

    // componentDidUpdate(){
    //     console.log(this.state)
    // }

    render() {
       
        return(
            <div>
                <div>
                    <button id="butt" disabled  onClick={this.props.onClick} name="submit" >Login</button>
                    <button onClick={this.HandleResetState} >reset</button>
                </div>
                <form id="form" onChange={this.handleInputChange} action="">
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

 //NON HO CAPITO LA SECONDA PARTE DELLA CONSEGNA, MANCA QUALCOSA.
export default Login