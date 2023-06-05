import React from "react";
import Welcome from './Welcome';
class InteractiveWelcome extends React.Component {
    state = {
        name:""
    }

    handleNameInputChange = (event) => {
        this.setState ({
            name: event.target.value
        })

    }

    render(){
        return(
            <div>
                <input onChange={this.handleNameInputChange} type="text" />
                <Welcome name= {this.state.name}/>
            </div>
        )
    }
}
export default InteractiveWelcome