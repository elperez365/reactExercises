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
import GithubUserList from "./Githubserist";
import Cardetails from "./CarDetails";
import FilteredList from "./FilteredList";
import { Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import Nav from "./Nav";

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
        <Routes>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/users/:username" element={<ShowGithubUser/>} />
          <Route path="/" element={<Nav/>}/>
          <Route path="/*" element={<h1>Page Not Found</h1>}/>
          <Route path="/users" element={<GithubUserList/>}>
            <Route index element={ <h1>Inserisci il nome github</h1> }/>
          </Route>
          
        </Routes>
        
        <Hello />
        <hr />
        <Welcome name="John" age={19} />
        <hr />
        {/* <ClickCounter onCounterChange={handleCounterChange} />
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
        <hr/>
        <GithubUserList/>
        <hr/>
        <Cardetails/>
        <hr/>
        <FilteredList people={[
          {id:1, name:"Peppe",age:17,},{id:2, name:"Pippo",age:19,}
        ]}/> */}
      </div>
    );
  }


export default App;
