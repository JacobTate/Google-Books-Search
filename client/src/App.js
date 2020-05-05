import React, { Component } from "react";
import HomePage from "./components/HomePage";
import "./App.css";

class App extends Component {
// testGet () {
//   axios.get("/api/books").then(function(res){
//     console.log(res);
    
//   })
// }
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //      <Button />
  //     </div>
  //   );
  // }
  render() {
    return (
      <HomePage />
    )
  }
}

export default App;
