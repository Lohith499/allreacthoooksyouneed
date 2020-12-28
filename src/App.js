import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  </Router>
  );
  }

export default App;
