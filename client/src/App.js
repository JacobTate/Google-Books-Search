import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import SavedPage from "./pages/savedPage/SavedPage";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
       <Router>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/saved" component={SavedPage}/>
        </Router>
    )
  }
}

export default App;
