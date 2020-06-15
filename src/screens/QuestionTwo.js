import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsTwo } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionTwo extends Component {
  state = {
    options: ['Yes', 'No'],
    ansTwo: '',
  };
  render() {
    const { options, ansTwo } = this.state;
    const { savedAns2 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'4- Is your hair color treated?'} />
        {options.map((item) => {
          if ((ansTwo && ansTwo == item) || (savedAns2 && savedAns2 == item)) {
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
      </div>
    );
  }

  updateAnswer = (selected) => {
    const { history } = this.props;
    this.setState({ ansOne: selected });
    this.props.updateAnsTwo(selected);
    setTimeout(function () {
      history.push('/questionThree');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns2: state.savedAns2,
  };
};

export default connect(mapStateToProps, {
  updateAnsTwo,
})(QuestionTwo);
