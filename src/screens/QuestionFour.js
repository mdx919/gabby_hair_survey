import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsFour } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionFour extends Component {
  state = {
    options: ['Thin', 'Medium', 'Dense'],
    ansFour: '',
  };
  render() {
    const { options, ansFour } = this.state;
    const { savedAns4 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'6- How is your hair density?'} />
        {options.map((item) => {
          if (
            (ansFour && ansFour == item) ||
            (savedAns4 && savedAns4 == item)
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
    this.setState({ ansFour: selected });
    this.props.updateAnsFour(selected);
    setTimeout(function () {
      history.push('/questionFive');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns4: state.savedAns4,
  };
};

export default connect(mapStateToProps, {
  updateAnsFour,
})(QuestionFour);
