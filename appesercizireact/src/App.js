
import './App.css';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Counter from './Counter';
import Hello from './Hello';
import Welcome from './Welcome';
import InteractiveWelcome from './InteractiveWelcome';

function App() {
  return (
    <div className="App">
     <Hello/>
     <Welcome name="John" age={19}/>
     <Counter/>
     <ClickCounter/>
     <ClickTracker/>
     <InteractiveWelcome/>
    </div>
  );
}

export default App;
