import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsEight } from '../actions';
import Checkbox from '../shared/Checkbox';
import SurveyButton from '../shared/SurveyButton';
import emailjs from 'emailjs-com';
import { email_key } from '../key';

class QuestionEight extends Component {
  state = {
    options: ['Yes', 'No'],
    ansEight: '',
  };
  render() {
    const { options, ansEight } = this.state;
    const { savedAns8 } = this.props;
    console.log(this.props);

    return (
      <div className='center-all main'>
        <QuestionTitle question={'10- Are you allergic to nuts or soy?'} />
        {options.map((item) => {
          if (
            (ansEight && ansEight === item) ||
            (savedAns8 && savedAns8 === item)
          ) {
            return (
              <Checkbox
                key={item}
                text={item}
                active
                updateAnswer={this.updateAnswer}
              />
            );
          }
          return (
            <Checkbox
              key={item}
              text={item}
              active={false}
              updateAnswer={this.updateAnswer}
            />
          );
        })}
        {ansEight ? (
          <SurveyButton onClick={this.handleSubmitBtn} text={'Submit'} />
        ) : null}
      </div>
    );
  }

  updateAnswer = (selected) => {
    this.setState({ ansEight: selected });
    this.props.updateAnsEight(selected);
  };

  handleSubmitBtn = () => {
    const { history } = this.props;
    const {
      savedName,
      savedEmail,
      savedAns1,
      savedAns2,
      savedAns3,
      savedAns4,
      savedAns5,
      savedAns6,
      savedAns7,
      savedAns8,
    } = this.props;

    let templateParams = {
      name: savedName,
      result: JSON.stringify({
        Name: savedName,
        Email: savedEmail,
        'Whats the texture of your hair?': savedAns1,
        'Is your hair color treated?': savedAns2,
        'How would you describe your scalp?': savedAns3,
        'How is your hair density?': savedAns4,
        'Is your hair dry?': savedAns5,
        'Is your hair damaged?': savedAns6,
        'Is your hair frizzy?': savedAns7,
        'Are you allergic to nuts or soy?': savedAns8,
      }),
    };

    if (
      savedName &&
      savedEmail &&
      savedAns1 &&
      savedAns2 &&
      savedAns3 &&
      savedAns4 &&
      savedAns5 &&
      savedAns6 &&
      savedAns7 &&
      savedAns8
    ) {
      emailjs
        .send('gmail', 'template_opfumXea', templateParams, email_key)
        .then(
          function (response) {
            history.push('/success');
          },
          function (error) {
            alert('failed');
          }
        );
    } else {
      alert('You missed some question, please go back to answer it!');
    }
  };
}

const mapStateToProps = (state) => {
  return {
    savedName: state.savedName,
    savedEmail: state.savedEmail,
    savedAns1: state.savedAns1,
    savedAns2: state.savedAns2,
    savedAns3: state.savedAns3,
    savedAns4: state.savedAns4,
    savedAns5: state.savedAns5,
    savedAns6: state.savedAns6,
    savedAns7: state.savedAns7,
    savedAns8: state.savedAns8,
  };
};

export default connect(mapStateToProps, {
  updateAnsEight,
})(QuestionEight);
