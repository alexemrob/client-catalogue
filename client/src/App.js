import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import NewClient from "./pages/NewClient";
import Edit from "./pages/Edit";
import Message from "./pages/Message";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
            <Route exact path="/newclient" component={NewClient} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/message" component={Message} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    )
  };
};

export default App;