import React, { Component } from 'react';
import { Checkbox } from 'antd';

const styles = {
  textAlign: 'left',
  padding: '20px',
  border: '1px solid #ccc',
  margin: '5px',
};

const ulStyles = {
  listStyle: 'none',
};

const ListItem = ({ text, index }) => {
  return (
    <li key={index}>
      <label>
        <input type="checkbox" />
        {text}
      </label>
    </li>
  );
};

const ListItem2 = props => {
  //3개 인자를 받음.
  return (
    <li key={props.index}>
      <label>
        <input type="checkbox" />
        {props.text}
      </label>
    </li>
  );
};

const LectureGList = props => {
  //2개 인자를 받음.
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => {
          //return <ListItem text={item} index={idx} />;
          return <ListItem2 key={idx} text={item} index={idx} />; //3개 인자를 넘겨줌
        })}
      </ul>
    </div>
  );
};

const ListItem3 = ({ title, completed }) => (
  <li>
    <Checkbox defaultChecked={completed}>{title}</Checkbox>
  </li>
);

const Todos = props => (
  <div className="Todos">
    <div>{props.title}</div>
    <ul>{props.items.map((item, idx) => <ListItem3 key={idx} {...item} />)}</ul>
  </div>
);

export default Todos;
