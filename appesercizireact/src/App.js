
import './App.css';
import Counter from './Counter';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
     <Hello/>
     <Welcome name="John" age={19}/>
     <Counter/>
    </div>
  );
}

export default App;
