import React, { createRef } from "react";

class Unlogin extends React.Component {

    formRef=createRef()

    resetForm= (ev) => {
        ev.preventDefault();
        const usIN = this.formRef.current[0];
        const psIN = this.formRef.current[1];
        const checkB = this.formRef.current[2];
        usIN.value = "";
        psIN.value = "";
        checkB.checked = false


    }

    enableL = () =>{
        const usIN = this.formRef.current[0];
        const psIN = this.formRef.current[1];
        const subB = this.formRef.current[3];
        if (usIN.value && psIN.value){
            subB.disabled = false
        } else subB.disabled = true

    }
    render(){
        return(
            <div>
                <form ref={this.formRef} onSubmit={this.props.onSubmit} action="">
                    <label htmlFor="username">username</label>
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