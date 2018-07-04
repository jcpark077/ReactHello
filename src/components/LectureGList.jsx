import React, { Component } from 'react';

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
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => {
          return <ListItem text={item} index={idx} />;
        })}
      </ul>
    </div>
  );
};

export default LectureGList;
