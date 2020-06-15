import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsOne } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionOne extends Component {
  state = {
    options: ['Straight', 'Wavy', 'Curly', 'Coiled'],
    ansOne: '',
  };
  render() {
    const { options, ansOne } = this.state;
    const { savedAns1 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'3- Whats the texture of your hair?'} />
        {options.map((item) => {
          if ((ansOne && ansOne == item) || (savedAns1 && savedAns1 == item)) {
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
    this.props.updateAnsOne(selected);
    setTimeout(function () {
      history.push('/questionTwo');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns1: state.savedAns1,
  };
};

export default connect(mapStateToProps, {
  updateAnsOne,
})(QuestionOne);
