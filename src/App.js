import React, { Component } from 'react';
import LectureGList from './components/LectureGList';
import logo from './logo.svg';
import './App.css';

const goals = ['1.xxxx', '2.yyyy', '3.zzz', '4.xxxxxxxxxxxx', '5.gkskddddddddddddddddd'];

class App extends Component {
  handleClick(e) {
    console.log(e.target);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React pjc</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGList items={goals} title={'강의__44444 목표!!!!=======!'} />
      </div>
    );
  }
}

export default App;
