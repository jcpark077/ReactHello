import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd';

const styles = {
  textAlign: 'left',
  padding: '20px',
  border: '1px solid #ccc',
  margin: '5px',
};

const ulStyles = {
  listStyle: 'none',
};

const ListItem3 = ({ subtitle, completed }) => (
  // goal의 각 행들(itemEach = subtitle, completed)
  <li>
    <Checkbox defaultChecked={completed}>{subtitle}</Checkbox>
  </li>
);

//const Todos = props => (

//const {title, items} = this.props;

//);

class Todos extends Component {
  // 넘어오는 인자(props): items, title
  constructor(props) {
    super(props);
    this.state = {
      items: [], // state 를 정의 aaa
    };
  }

  handlePress = e => {
    console.log(e.target.value);

    const { items } = this.state;
    items.push({
      subtitle: e.target.value,
      completed: false,
    });

    this.setState({
      items: [...items],
    });
  };

  render() {
    const { items, title } = this.props;
    return (
      <div className="Todos">
        <div>{title}</div>

        <p>{'dddddddddddddd'}</p>
        <Input onPressEnter={this.handlePress} />

        <ul>{items.map((itemEach, idx) => <ListItem3 key={idx} {...itemEach} />)}</ul>
      </div>
    );
  }
}

export default Todos;
