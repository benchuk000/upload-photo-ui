import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'

import * as authActions from '../../actions/auth';
import * as headerModalActions from '../../actions/headerModal';

import './App.css';
import Header from '../../components/Header/Header';
import ReduxToastr from 'react-redux-toastr';

class App extends Component{
  render() {
    const authButtons = [
      <RaisedButton
        label="Войти"
        onClick={() => this.props.openModal('SIGN_IN')}
        style={{ marginRight: '10px' }}
      />,
      <RaisedButton
        label="ЗАРЕГИСТРИРОВАТЬСЯ"
        onClick={() => this.props.openModal('SIGN_UP')}
      />
    ];

    const userButtons = [
      <RaisedButton
        label="Профиль"
        onClick={() =>  this.props.history.push(`/userProfile/${this.props.currentUser._id}`)}
        style={{ marginRight: '10px' }}
      />,
      <RaisedButton
        label="Выйти"
        onClick={() => this.props.logout()}
      />
    ];

    const adminButtons = [
      <RaisedButton
        label="Профиль"
        onClick={() =>  this.props.history.push(`/userProfile/${this.props.currentUser._id}`)}
        style={{ marginRight: '10px' }}
      />,
      <RaisedButton
        label="Админ"
        onClick={() => this.props.history.push('/Admin')}
        style={{ marginRight: '10px' }}
      />,
      <RaisedButton
        label="Выйти"
        onClick={() => this.props.logout()}
      />
    ];

    return (
      <div>
        <Header >
          {this.props.isAuthorized ? (this.props.currentUser.isAdmin ? adminButtons : userButtons) : authButtons }
        </Header>
        {this.props.children}
        <ReduxToastr
          timeOut={2000}
          newestOnTop={true}
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  isAuthorized: !!state.auth.currentUser,
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (selectedTab) => {
    dispatch(headerModalActions.setSelectedTab(selectedTab))
    dispatch(headerModalActions.openModal());
  },
  logout: () => dispatch(authActions.logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));