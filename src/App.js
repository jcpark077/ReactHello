import React, { Component } from 'react';
import LectureGList from './components/LectureGList';
import Timer from './components/Timer';
import logo from './logo.svg';
import './App.css';

const goals = ['11111', '22222', '33333', '44444', '55555'];

class App extends Component {
  handleClick(e) {
    //debugger;
    console.log(e.target);
  }

  state = {
    isExpired: false,
  };
  handleComplete = () => {
    //자식이 종료되고 1초 후에
    this.setState({ isExpired: true });
    console.log('타이머로 부터 호출 받음...');
  };

  render() {
    const { isExpired } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React pjc v0.1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGList items={goals} title={'강의목표!'} />
        <Timer expireDate={'2018-07-04T17:00:00+09:00'} />
      </div>
    );
  }
}

export default App;
