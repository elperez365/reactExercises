import React from "react";

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
            <h1>{this.state.count}</h1>
        )
    }
}

Counter.default.props={
    initCount:1,
    increment:1,
    interval:1000,
}


export default Counter