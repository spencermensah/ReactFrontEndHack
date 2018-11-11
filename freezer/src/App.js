import React, { Component } from 'react';
import './App.css';
import trainfeedback from "./compents/trainfeedback";
import login from "./login";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import Home from "./Home";
import {
  Route,
  HashRouter
} from "react-router-dom";


class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
  };
}

componentDidMount() {
}

render() {
    return (
      <div>
        <Navbar fixedTop>
          <Nav>
            <NavItem eventKey={1} href="/#/login">
              Login
            </NavItem>
            <NavItem eventKey={2} href="/#/trainfeedback">
              FeedBack
            </NavItem>
            <NavItem eventKey={2} href="/#/home">
              Home
            </NavItem>
          </Nav>
        </Navbar>;


        <HashRouter>
          <div>
            <div class="content">
             <Route exact path="/login" component={login}/>
             <Route path="/trainfeedback" component={trainfeedback}/>
             <Route path="/home" component={Home}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
