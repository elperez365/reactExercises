
import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
     <Hello/>
     <Welcome name="John" age={19}/>
     <Counter/>
     <ClickCounter/>
    </div>
  );
}

export default App;
