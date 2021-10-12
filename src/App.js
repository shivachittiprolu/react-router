import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Nav from './Nav';
import ItemDetails from './ItemDetails';

import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route path="/Home/:id" component={ItemDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
