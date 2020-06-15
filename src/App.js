import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import Name from './screens/Name';
import Email from './screens/Email';
import QuestionOne from './screens/QuestionOne';
import QuestionTwo from './screens/QuestionTwo';
import QuestionThree from './screens/QuestionThree';
import QuestionFour from './screens/QuestionFour';
import QuestionFive from './screens/QuestionFive';
import QuestionSix from './screens/QuestionSix';
import QuestionSeven from './screens/QuestionSeven';
import QuestionEight from './screens/QuestionEight';
import Success from './screens/Success';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={FirstPage}></Route>
      <Route exact path='/name' component={Name}></Route>
      <Route exact path='/email' component={Email}></Route>
      <Route exact path='/questionOne' component={QuestionOne}></Route>
      <Route exact path='/questionTwo' component={QuestionTwo}></Route>
      <Route exact path='/questionThree' component={QuestionThree}></Route>
      <Route exact path='/questionFour' component={QuestionFour}></Route>
      <Route exact path='/questionFive' component={QuestionFive}></Route>
      <Route exact path='/questionSix' component={QuestionSix}></Route>
      <Route exact path='/questionSeven' component={QuestionSeven}></Route>
      <Route exact path='/questionEight' component={QuestionEight}></Route>
      <Route exact path='/success' component={Success}></Route>
    </BrowserRouter>
  );
}

export default App;
