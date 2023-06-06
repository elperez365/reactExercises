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
import LanguageContext from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

class App extends React.Component {
    state={
    logged:false,
    language:"en",
  }

  onLogin = (ev) =>{
    this.setState({
        logged:true,
    })
}

handleLanguageChange= (event) => {
  this.setState({
    language:event.target.value
  })
}

  render() {
    return (
      <div className="App">
        
          <select value={this.state.language} onChange={this.handleLanguageChange}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
          <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage/>
          </LanguageContext.Provider>
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
