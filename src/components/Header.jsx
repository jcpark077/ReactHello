import React, { Component } from 'react';
import logo from '/Users/User/git/hello/src/logo.svg';

// 클로져 영역
const TEXT = 'App-logo rotate';

class Header extends Component {
  handleClick(e) {
    //debugger;
    //console.log(e.target);
    console.log('### logo click.....');
  }

  render() {
    return (
      <header className="App-header">
        <img onClick={this.handleClick} src={logo} className={'App-logo rotate'} alt="logo" />
        <h1 className="App-title">Welcome to React pjc v0.1</h1>
      </header>
    );
  }
}

export default Header;
