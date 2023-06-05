import React from "react";
import Counter from "./Counter";

class ClickCounter extends React.Component{
    state={
        count:0
    }

    incrementCounterBy1 = () => {
        this.setState({
            count: this.state.count + 1
        })

    }

    render(){


        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCounterBy1}>
                incrementa di 1
                </button>
            </div>
        )
    }
}

export default ClickCounter