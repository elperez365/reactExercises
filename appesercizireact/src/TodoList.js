import React, { createRef } from "react";

class TodoList extends React.Component {
    state= {
        items : ["ciao"]

    }

    inRef=createRef()

    addItems = () => {
        const txIN = this.inRef.current;

       
        this.setState({
            items : [...this.state.items, txIN.value]
        })
    }


    render(){
        return (
            <div>
                <input ref={this.inRef} type="text" />
                <button onClick={this.addItems}>aggiungi</button>
                <ul>
                    {this.state.items.map((el)=> <li>{el}</li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList