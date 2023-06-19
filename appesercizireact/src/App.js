import React, { useState } from "react";
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
import GithubUser from "./GithubUser";

function App() {
  const [logged, setLogged] = useState(false)
    

  const onLogin = (ev) =>{
    setLogged(true)
    
}

  const handleCounterChange = (counter) => {
    console.log("counter è aggiornato",counter)
  }

  
    return (
      <div className="App">
        <Hello />
        <hr />
        <Welcome name="John" age={19} />
        <hr />
        <Counter />
        <hr />
        <ClickCounter onCounterChange={handleCounterChange} />
        <hr />
        <ClickTracker />
        <hr />
        <InteractiveWelcome />
        <hr />
        <Login onClick={onLogin}/>
        <hr />
        <Unlogin onSubmit={onLogin} />
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
        <hr/>
        <GithubUser/>
      </div>
    );
  }


export default App;
