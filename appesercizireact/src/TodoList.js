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

        let idtoRemove=  event.target.id;
        this.state.items.splice(idtoRemove,1);

        this.setState({
            items: this.state.items
        })   
    }
    

    render(){
    
        return (
            <div>
                <input id="txIN" type="text" />
                <button onClick={this.addItems}>aggiungi</button>
                <button onClick={this.resetItem} >reset</button>
                <ul id="itemss">
                    {this.state.items.map((el, index)=> 
                    <li>
                        {el}
                        <button id ={index} onClick={this.removeLi} >rimuovi</button>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList