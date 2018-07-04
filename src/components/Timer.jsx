import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const TIME_FORMAT = 'YYYY-MM-DD A hh:mm';

class Timer extends Component {
  constructor(props) {
    super(props); // this.props = {...props}; 결과임. super 호출후 this를 쓸수 있음.
    this.state = {
      date: moment(),
    };
    // this.date = moment(); 로 할수도 있음.
    //this.nTimer = setInterval(this.handleTick, 1000);
    this.nTimer = setInterval(() => {
      this.setState({
        date: moment(),
      });
    }, 1000);
  }

  handleTick = () => {
    //에로우 함수를 써야, 아래서 this를 사용할수 있음.
    console.log(1);
    this.forceUpdate();
  };

  shouldComponentUpdate(nextProps, nextState) {
    const prevDateStr = this.state.date.format(TIME_FORMAT);
    const nextDateStr = nextState.date.format(TIME_FORMAT);
    return prevDateStr !== nextDateStr;
  }

  render() {
    console.log(this.props.expireDate);
    //if ()
    const { expireDate, onComplete } = this.props;
    const { date } = this.state;

    if (moment(expireDate) < date) {
      setTimeout(() => {
        onComplete && onComplete(); // 앞이 true이면, 뒤가 수행됨.
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
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}

export default Timer;
