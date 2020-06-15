import React from 'react';
import './index.css';

function FirstPage({ history }) {
  return (
    <div className='App main'>
      <img
        className='first-img'
        src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        alt='text'
      />
      <p className='first-page-text'>
        Are you ready for your hair consultation?
      </p>
      <button className='start-quiz-btn' onClick={() => history.push('/name')}>
        Start The Quiz!
      </button>
    </div>
  );
}

export default FirstPage;
