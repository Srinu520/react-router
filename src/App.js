import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Profile from "./components/profile";
import ProfileDetails from "./components/profileDetails";
import AddUser from "./components/addUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:id" component={ProfileDetails}/>
          <Route path="/addUser" component={AddUser} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
