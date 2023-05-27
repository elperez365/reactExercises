import React from "react";

class Counter extends React.Component{
    state={
        count:this.props.init,
    }

    constructor (props){
    super (props);

    setInterval(() => {
        this.setState({
            count: this.state.count + this.props.incr,
        })
    }, this.props.intervall);
    }

    render(){
        return(
            <h1>{this.state.count}</h1>
        )
    }
}

Counter.defaultProps={
    init:0,
    incr:2,
    intervall:1000,
}

export default Counter