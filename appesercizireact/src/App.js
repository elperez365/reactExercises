import React from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./login";

class App extends React.Component {
  state = {
    isloged: false,
  };

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
        <Login/>
          
      </div>
    );
  }
}

export default App;
