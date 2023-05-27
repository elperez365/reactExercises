import React from "react";
import CounterDisplay from "./CounterDisplay";


class Counter    extends React.Component{
    state={
        count:this.props.initCount,
    }

    constructor (props){
    super (props);

    setInterval(() => {
        this.setState({
            count: this.state.count + this.props.increment,
        })
    }, this.props.interval);
    }


    render(){
        return(
            <CounterDisplay/>
        )
    }
}

Counter.default.props={
    initCount:1,
    increment:1,
    interval:1000,
}


export default Counter