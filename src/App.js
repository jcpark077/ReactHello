import React, { Component } from 'react';
//import LectureGList from './components/LectureGList';
import Todos from './components/Todos';
import Timer from './components/Timer';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';
//import 'antd/dist/antd.css';

const goals = [
  { title: '22222', completed: true },
  { title: '33333', completed: true },
  { title: '44444', completed: true },
  { title: '55555', completed: true },
  { title: '11111', completed: true },
];

class App extends Component {
  // handleClick(e) {
  //   //debugger;
  //   console.log(e.target);
  // }

  state = {
    isExpired: false,
    dateStr: '2018-07-05T17:00:00+09:00',
  };
  handleComplete = () => {
    //자식이 종료되고 1초 후에
    this.setState({ isExpired: true }); // 에로우 함수 때문에.. this가 작동됨.
    console.log('타이머로 부터 호출 받음...');
  };

  render() {
    const { isExpired, dateStr } = this.state; // state 값을 꺼내 씀.
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Todos items={goals} title={'강의목표!'} />
        {!isExpired && <Timer key={dateStr} expireDate={dateStr} onComplete={this.handleComplete} />}
      </div>
    );
  }
}

export default App;
