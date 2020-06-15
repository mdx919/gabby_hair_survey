import React from 'react';
import '../index.css';

const Checkbox = ({ text, active, updateAnswer }) => {
  return (
    <div onClick={() => updateAnswer(text)}>
      <p className={active ? 'checkbox-active' : 'checkbox'}>{text}</p>
    </div>
  );
};

export default Checkbox;
