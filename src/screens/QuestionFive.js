import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsFive } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionFive extends Component {
  state = {
    options: ['Yes', 'No'],
    ansFive: '',
  };
  render() {
    const { options, ansFive } = this.state;
    const { savedAns5 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'7- Is your hair dry?'} />
        {options.map((item) => {
          if (
            (ansFive && ansFive === item) ||
            (savedAns5 && savedAns5 === item)
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
      </div>
    );
  }

  updateAnswer = (selected) => {
    const { history } = this.props;
    this.setState({ ansFive: selected });
    this.props.updateAnsFive(selected);
    setTimeout(function () {
      history.push('/questionSix');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns5: state.savedAns5,
  };
};

export default connect(mapStateToProps, {
  updateAnsFive,
})(QuestionFive);
