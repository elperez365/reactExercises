
import './App.css';
import Hello from './Hello';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
     <Hello/>
     <Welcome name={<strong>vasco</strong> } age="30"/>
    </div>
  );
}

export default App;
