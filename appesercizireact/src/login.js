import React from "react";

class Login extends React.Component {
    state ={
        username: "",
        password: "" 
    }

   

    handleInputChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        this.setState ({
            [name]: value
        })
        const button= document.querySelector("#butt")
        if (this.state.username.length > 0 && this.state.password.length > 0 ) {
            button.disabled = false
        } else button.disabled = true
        
    }

    onLogin = (event) =>{
        //non capisco cosa chiede la seconda parte della consegna
    }



    render() {
        return(
            <div>
                <form onChange={this.handleInputChange} action="">
                    <input name="username" type="text" />
                    <input name="password" type="password" />
                    <button disabled id="butt" onClick={this.onLogin} name="submit" >Login</button>

                </form>
            </div>
        )
    }
}

 //NON HO CAPITO LA SECONDA PARTE DELLA CONSEGNA, MANCA QUALCOSA.
export default Login