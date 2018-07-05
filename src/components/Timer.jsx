import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const TIME_FORMAT = 'YYYY-MM-DD A hh:mm';

class Timer extends Component {
  // 인자는 props, state 뿐임.  호출시 넣어준 모든 값을 props 로 받는다.
  constructor(props) {
    super(props); // this.props = {...props}; 결과임. super() 호출후 this.props를 쓸수 있음.
    this.state = {
      // state 를 정의 aaa
      date: moment(),
    };
    // this.date = moment(); 로 할수도 있음.
    //this.nTimer = setInterval(this.handleTick, 1000);
    this.nTimer = setInterval(() => {
      this.setState({
        date: moment(),
      });
    }, 3000);
  }

  handleTick = () => {
    //에로우 함수를 써야, 아래서 this를 사용할수 있음.
    console.log(1);
    this.forceUpdate();
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 지금this, 다음next를 비교하여, render() 안할지를 판단 함.
    const prevDateStr = this.state.date.format(TIME_FORMAT);
    const nextDateStr = nextState.date.format(TIME_FORMAT);
    return prevDateStr !== nextDateStr; // 값에 변화가 없으면, 아래 render()를 수행하지 않고, 빠져나감....
    // true가 반환 되면, render() 수행
  }

  render() {
    console.log(this.props.expireDate);
    //console.log(this.props.onComplete);

    const { expireDate, onComplete } = this.props; // props 값을 꺼내서 사용
    const { date } = this.state; // state 값을 꺼내서 사용

    if (moment(expireDate) < date) {
      // 만기시각 과 현재시각 비교
      setTimeout(() => {
        onComplete && onComplete(); // 앞이 true이면, 뒤가 수행됨. pjc 질의 필요...
      }, 1000);

      return <div>종료</div>;
    }

    return (
      <div>
        <div>현재시각: {moment().format(TIME_FORMAT)}</div>
        <div>강의종료시까지 {moment(this.props.expireDate).fromNow()} 분 남았습니다.</div>
      </div>
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()호출됨....');
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;
