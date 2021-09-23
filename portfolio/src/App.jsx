import { Route } from 'react-router';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home/>
      <Switch>
        <Route path='/'><Home></Home></Route>
        <Route path='/about'><About></About></Route>
      </Switch>
    </div>
  );
}

export default App;
