import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsSeven } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionSeven extends Component {
  state = {
    options: ['Yes', 'No'],
    ansSeven: '',
  };
  render() {
    const { options, ansSeven } = this.state;
    const { savedAns7 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'9- Is your hair frizzy?'} />
        {options.map((item) => {
          if (
            (ansSeven && ansSeven === item) ||
            (savedAns7 && savedAns7 === item)
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
    this.setState({ ansSeven: selected });
    this.props.updateAnsSeven(selected);
    setTimeout(function () {
      history.push('/questionEight');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns7: state.savedAns7,
  };
};

export default connect(mapStateToProps, {
  updateAnsSeven,
})(QuestionSeven);
