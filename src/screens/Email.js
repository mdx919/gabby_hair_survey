import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionTitle from '../shared/QuestionTitle';
import SurveyButton from '../shared/SurveyButton';
import { updateEmail } from '../actions';

class Email extends Component {
  state = {
    email: '',
  };
  render() {
    return (
      <div className='center-all main'>
        <QuestionTitle
          question={'2- we also need your email to send your results!'}
        />
        <input
          type='email'
          className='input-style first-page-text'
          placeholder='Type your email'
          onChange={(e) => this.setState({ email: e.target.value })}
          maxLength={50}
          value={this.props.savedEmail || this.state.email}
        />
        {this.handleButton()}
      </div>
    );
  }

  isValidEmailAddress(address) {
    return !!address.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }

  handleButton = () => {
    if (this.state.email.length > 1) {
      return (
        <SurveyButton onClick={this.handleContinueButton} text={'Continue'} />
      );
    }
  };

  handleContinueButton = () => {
    const { history } = this.props;
    if (this.isValidEmailAddress(this.state.email)) {
      this.props.updateEmail(this.state.email);
      history.push('/questionOne');
    } else {
      alert('Invalid Email Format');
    }
  };
}

const mapStateToProps = (state) => {
  return {
    savedEmail: state.savedEmail,
  };
};

export default connect(mapStateToProps, {
  updateEmail,
})(Email);
