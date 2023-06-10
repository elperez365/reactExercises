import React, { createRef } from "react";





class TodoList extends React.Component {
    state= {
        items : ["ciao"],
        input: ""
    }

    inRef=createRef()

    handleInputChange =() =>{
        this.setState({
            input:this.inRef.current.value
        })
    }

    addItems = () => {
        let txIN = this.inRef.current;

       
        this.setState({
            items : [...this.state.items, txIN.value],
            input: "",
        })

        
    }


    render(){
        return (
            <div>
                <input value= {this.state.input} onChange={this.handleInputChange} ref={this.inRef} type="text" />
                <button onClick={this.addItems}>aggiungi</button>
                <ul>
                    {this.state.items.map((el)=> <li>{el}</li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList