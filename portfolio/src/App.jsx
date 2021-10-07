import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
