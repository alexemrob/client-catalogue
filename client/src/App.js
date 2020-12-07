
import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Charge from "./components/Charge/Charge"
import Message from "./components/Message/Message"
import NewClient from "./components/NewClient/NewClient"
import TodoList from "./components/Notes/TodoList"
import Search from "./components/Search/Search"

function App() {

  return (
    <Router>
      <NavBar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/NewClient" component={NewClient} />
          <Route exact path="/Charge" component={Charge} />
          <Route exact path="/Message" component={Message} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;