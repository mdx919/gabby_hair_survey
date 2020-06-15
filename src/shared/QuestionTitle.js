import React from 'react';
import '../index.css';

const QuestionTitle = ({ question }) => {
  return (
    <>
      <p className='first-page-text'>{question}</p>
    </>
  );
};

export default QuestionTitle;
