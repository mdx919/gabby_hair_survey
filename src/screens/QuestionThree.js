import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import { updateAnsThree } from '../actions';
import Checkbox from '../shared/Checkbox';

class QuestionThree extends Component {
  state = {
    options: ['Dry', 'Oily', 'Normal'],
    ansThree: '',
  };
  render() {
    const { options, ansThree } = this.state;
    const { savedAns3 } = this.props;
    return (
      <div className='center-all main'>
        <QuestionTitle question={'5- How would you describe your scalp?'} />
        {options.map((item) => {
          if (
            (ansThree && ansThree === item) ||
            (savedAns3 && savedAns3 === item)
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
    this.setState({ ansThree: selected });
    this.props.updateAnsThree(selected);
    setTimeout(function () {
      history.push('/questionFour');
    }, 500);
  };
}

const mapStateToProps = (state) => {
  return {
    savedAns3: state.savedAns3,
  };
};

export default connect(mapStateToProps, {
  updateAnsThree,
})(QuestionThree);
