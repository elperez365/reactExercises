
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
     <Hello/>
     <Welcome name="John" age={19}/>
    </div>
  );
}

export default App;
