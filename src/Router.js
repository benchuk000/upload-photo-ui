
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import UserProfile from './containers/UserProfile/UserProfile';
import ManageUsers from './containers/ManageUsers/ManageUsers';
import requireAuth from './helpers/help';

class Router extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Switch>
        <Route path="/welcome" exact component={Welcome}/>
        <Route path="/userProfile/:id" component={requireAuth(UserProfile)}/>
        <Route path="/Admin" component={requireAuth(ManageUsers,true)}/>
      </Switch>
    );
  }
}

export default Router;