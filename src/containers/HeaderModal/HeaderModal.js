import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';

import HeaderModal from '../../components/HeaderModal/HeaderModal';

import * as headerModalActions from '../../actions/headerModal';
import * as authActions from '../../actions/auth';
import * as userService from '../../services/userService';

class HeaderModalContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  setData = ({ target: { name, value } }) => this.setState({ [name]: value })

  signIn = (event) => {
    event.preventDefault();
    this.props.signIn(this.state, (data) => {
      // this.props.history.push('/');
    });
  }

  signUp = (event) => {
    event.preventDefault();
    userService.signUpUSer(this.state)
      .then(res => {
        this.onTabChange('SIGN_IN');
        toastr.success('You are signed up successfully')
      })
      .catch(({ response }) => toastr.error(response.data))
  }
  
  onTabChange = (selectedTab) => {
    this.setState({ email: '', password: ''});
    this.props.onTabChange(selectedTab);
  }

  render()  
  {
    return (
      <HeaderModal
        {...this.props}
        onTabChange={this.onTabChange}
        signIn={this.signIn}
        signUp={this.signUp}
        email={this.state.email}
        password={this.state.password}
        setData={this.setData}
      />
      )
    }
  }

const mapStateToProps = (state) => ({
  isOpen: state.headerModal.isOpen,
  selectedTab: state.headerModal.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(headerModalActions.closeModal()),
  onTabChange: (selectedTab) => dispatch(headerModalActions.setSelectedTab(selectedTab)),
  signIn: (data, cb) => dispatch(authActions.signIn(data, (data) => {
    dispatch(headerModalActions.closeModal());
    cb(data);
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderModalContainer));