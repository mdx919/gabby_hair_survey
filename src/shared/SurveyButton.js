import React from 'react';
import '../index.css';

const SurveyButton = ({ text, onClick }) => {
  return (
    <button className='start-quiz-btn survey-btn' onClick={onClick}>
      {text}
    </button>
  );
};

export default SurveyButton;
