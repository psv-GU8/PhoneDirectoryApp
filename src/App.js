import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import AddUser from "./components/addUser";

window.list = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
