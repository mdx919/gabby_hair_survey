import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsSix } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionFive extends Component {
  state = {
    options: ['Yes', 'No'],
    ansSix: '',
  };
  render() {
    const { options, ansSix } = this.state;
    const { savedAns6 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'8- Is your hair damaged?'} />
        {options.map((item) => {
          if (
            (ansSix && ansSix === item) ||
            (savedAns6 && savedAns6 === item)
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
    this.setState({ ansSix: selected });
    this.props.updateAnsSix(selected);
    setTimeout(function () {
      history.push('/questionSeven');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns6: state.savedAns6,
  };
};

export default connect(mapStateToProps, {
  updateAnsSix,
})(QuestionFive);
