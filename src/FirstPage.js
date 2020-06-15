import React from 'react';
import './index.css';

function FirstPage({ history }) {
  return (
    <div className='App main'>
      <img
        src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        alt='https://images.unsplash.com/photo-1535637603896-07c179d71103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
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
