import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const goals = ["1.xxxx", "2.yyyy", "3.zzz", "4.xxxxxxxxxxxx", "5.gkskddddddddddddddddd"];

const LectGList = props => {
  return (
    <div>
      <div>{props.title}</div>
      <ul>{props.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React pjc</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectGList items={goals} title={"강의   목표!!!!=======!"} />
      </div>
    );
  }
}

export default App;
