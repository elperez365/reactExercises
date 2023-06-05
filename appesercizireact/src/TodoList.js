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

    resetItem = () => {
        this.setState ({
            items:[]
        })
    }

    removeLi = (event) =>{
        event.preventDefault()

        let toRemove=  event.target.id;
        this.setState({
            items: this.state.items.filter((el) => el !== toRemove)
        })   
    }
    

    render(){
        return (
            <div>
                <input id="txIN" type="text" />
                <button onClick={this.addItems}>aggiungi</button>
                <button onClick={this.resetItem} >reset</button>
                <ul >
                    {this.props.render(this.state.items,this.removeLi)}
                </ul>
            </div>
        )
    }
}

export default TodoList


