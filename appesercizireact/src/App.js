import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./login";
import Unlogin from "./Unlogin";
import TodoList from "./TodoList";

class App extends React.Component {
    state={
    logged:false
  }

  onLogin = (ev) =>{
    this.setState({
        logged:true,
    })
    
    
}

  render() {
    return (
      <div className="App">
        <Hello />
        <hr />
        <Welcome name="John" age={19} />
        <hr />
        <Counter />
        <hr />
        <ClickCounter />
        <hr />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />
        <hr />
        <Login onClick={this.onLogin}/>
        <hr />
        <Unlogin onSubmit={this.onLogin} />
        <hr />
        <TodoList
        render= {(items,removeLi)=>{
          
          return (
            <div>
            {items.map((el)=> <li> {el}<button id ={el} onClick={removeLi} >rimuovi</button></li>)}
            </div>
          )

        }}
          />
      </div>
    );
  }
}

export default App;
