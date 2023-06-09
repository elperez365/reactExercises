import React from "react";

class Login extends React.Component {
    state ={
        username: "",
        password: "",
        disabled: true,
    }

   

    handleInputChange = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value
        this.setState ({
            [name]: value
        })
        
        if (this.state.username.length && this.state.password.length ) {
            this.setState({
                disabled:false
            })
        } else this.setState({
            disabled:true
        })
        
    }

    
    


    render() {
       
        return(
            <div>
                <form id="form" onChange={this.handleInputChange} action="">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" required />
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" required />
                    <button id="butt" disabled={this.state.disabled}  onClick={this.props.onClick} name="submit" >Login</button>
                </form>
                
            </div>
        )
    }
}


export default Login