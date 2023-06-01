import React from "react";

class  Age   extends React.Component{


    render(){
        return(
            <div>
                {this.props.age >=18 
                ? <p> {this.props.age}</p>
                : <p>You are very young!</p>}
                
            </div>
        )
    }
}

export default Age