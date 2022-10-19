import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">



        <BrowserRouter>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;










