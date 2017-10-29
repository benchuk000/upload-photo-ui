import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent, isAdminRequired) {
  class Authenticate extends React.Component {
    static propTypes = {
      isAuthorized: PropTypes.bool.isRequired,
    };

    componentWillMount() {
      if (!this.props.isAuthorized || isAdminRequired && !this.props.isAdmin) {
        this.props.history.push('/welcome');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthorized || isAdminRequired && !this.props.isAdmin) {
        this.props.history.push('/welcome');
      }
    }

    render() {
      return (
        this.props.isAuthorized && <ComposedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthorized: !!state.auth.currentUser,
    currentUser: state.auth.currentUser,
    isAdmin: state.auth.currentUser && state.auth.currentUser.isAdmin
  });

  return connect(mapStateToProps)(Authenticate);
}