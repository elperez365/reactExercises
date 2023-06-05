import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component{
    state={
        count:this.props.init,
    }

    componentDidMount(){

    setInterval(() => {
        this.setState({
            count: this.state.count + this.props.incr,
        })
    }, this.props.intervall);
    }

    render(){
        return(
            <CounterDisplay display={this.state.count}/>
        )
    }
}

Counter.defaultProps={
    init:0,
    incr:2,
    intervall:1000,
}

export default Counter