import React from "react";

class TodoList extends React.Component {
    state= {
        items : ["ciao"]
    }

    addItems = () => {
        const txIN = document.querySelector("#txIN");

       
        this.setState({
            items : [...this.state.items, txIN.value]
        })

        txIN.value = "";
    }


    render(){
        return (
            <div>
                <input id="txIN" type="text" />
                <button onClick={this.addItems}>aggiungi</button>
                <ul>
                    {this.state.items.map((el)=> <li>{el}</li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList