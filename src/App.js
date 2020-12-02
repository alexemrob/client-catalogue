
import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Charge from "./components/Charge/Charge"
import Message from "./components/Message/Message"
import NewClient from "./components/NewClient/NewClient"
import Notes from "./components/Notes/Notes"
import Search from "./components/Search/Search"

function App() {

  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Notes" component={Notes} />
          <Route exact path="/NewClient" component={NewClient} />
          <Route exact path="/Charge" component={Charge} />
          <Route exact path="/Message" component={Message} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;