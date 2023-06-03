import React from "react";

class ClickTracker extends React.Component {
    state= ({
        lastButton: ""
    })

    handleButtonClick = (event) =>{
        this.setState({
            lastButton : event.target.name
        })
        
    }


    render(){
        return (
            <div>
                <h1>l'ultimo bottone premuto è stato: {this.state.lastButton} </h1>
                <button onClick={this.handleButtonClick} name="button1">button1</button>
                <button onClick={this.handleButtonClick} name="button2">button2</button>
                <button onClick={this.handleButtonClick} name="button3">button3</button>
            </div>
        )
    }
}

export default ClickTracker