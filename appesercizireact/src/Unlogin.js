import React from "react";

class Unlogin extends React.Component {

    

    resetForm= (ev) => {
        ev.preventDefault();
        const usIN = document.querySelector("#usIN");
        const psIN = document.querySelector("#psIN");
        const checkB = document.querySelector("#checkB")
        
        usIN.value = "";
        psIN.value = "";
        checkB.checked = false


    }

    enableL = () =>{
        const usIN = document.querySelector("#usIN");
        const psIN = document.querySelector("#psIN");
        const subB = document.querySelector("#subB");
        if (usIN.value && psIN.value){
            subB.disabled = false
        } else subB.disabled = true

    }

    componentDidMount(){
        const usIN = document.querySelector("#usIN");
        usIN.focus()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit} action="">
                    <label  htmlFor="username">username</label>
                    <input onChange={this.enableL} id="usIN" name="username" type="text" />
                    <label htmlFor="password">password</label>
                    <input onChange={this.enableL} id="psIN" name="password" type="password" />
                    <label htmlFor="completed">completed</label>
                    <input id="checkB" name="completed" type="checkbox" />
                    <button id="subB" disabled type="submit">login</button>
                    <button onClick={this.resetForm} id="resetB" >reset</button>
                </form>
            </div>
        )
    }
}
export default Unlogin