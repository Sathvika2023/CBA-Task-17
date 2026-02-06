import React from "react";
import "./App.css";

import Welcome from "./components/Welcome";
import Student from "./components/Student";
import Counter from "./components/Counter";
import ToggleMessage from "./components/ToggleMessage";
import Timer from "./components/Timer";

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="card title">
          <Welcome />
        </div>

        <div className="card">
          <Student name="Sathvika" course="Computer Science" />
          <Student name="Rahul" course="AI & ML" />
        </div>

        <div className="card">
          <Counter />
        </div>

        <div className="card">
          <ToggleMessage />
        </div>

        <div className="card">
          <Timer />
        </div>

      </div>
    );
  }
}

export default App;
