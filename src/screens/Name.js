import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import SurveyButton from '../shared/SurveyButton';
import { updateName } from '../actions';

class Name extends Component {
  state = {
    name: '',
  };
  render() {
    return (
      <div className='center-all main'>
        <QuestionTitle question={'1- Before we start, type down your name?'} />
        <input
          className='input-style first-page-text'
          placeholder='Type your full name'
          onChange={(e) => this.setState({ name: e.target.value })}
          maxLength={50}
          value={this.props.savedName || this.state.name}
        />
        {this.handleButton()}
      </div>
    );
  }

  handleButton = () => {
    if (this.state.name.length > 1 || this.props.savedName) {
      return (
        <SurveyButton onClick={this.handleContinueButton} text={'Continue'} />
      );
    }
  };

  handleContinueButton = () => {
    const { history } = this.props;
    this.props.updateName(this.state.name);
    history.push('/email');
  };
}

const mapStateToProps = (state) => {
  return {
    savedName: state.savedName,
  };
};

export default connect(mapStateToProps, {
  updateName,
})(Name);
