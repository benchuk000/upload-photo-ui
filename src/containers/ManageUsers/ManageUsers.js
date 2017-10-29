import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as manageUsers from '../../actions/manageUsers';
import ManageUsers from '../../components/ManageUsers/ManageUsers';



class ManageUsersContainer extends Component{

  componentDidMount() {
    this.props.usersApiRequest({ sort: "email", sortDir: this.props.sortDir});
  }

  isSelected = (index) => {
    return this.props.selectedRow === this.props.users[index]._id;
  };

  handleRowSelection = (selcetedIndexs) => {
    this.props.handleRowSelection(selcetedIndexs.length ? this.props.users[selcetedIndexs[0]]._id : null);
  };

  edit = (e) => this.props.history.push(`/userProfile/${this.props.selectedRow}`);

  sort = () => {
    const sortDir = this.props.sortDir === 'ASC' ? 'DESC' : 'ASC';
    this.props.sortUsers(sortDir);
    this.props.usersApiRequest({ sort: "email", sortDir: sortDir});
  }

  render(){
    return (
      <ManageUsers
        remove={this.props.usersApiDeleteRequest}
        edit={this.edit}
        userDeleted={this.userDeleted}
        sort={this.sort}
        selectedRow={this.props.selectedRow}
        isCurrentUserSelected={this.props.isCurrentUserSelected}
        sortDir={this.props.sortDir}
        handleRowSelection={this.handleRowSelection}
        users={this.props.users}
        isSelected={this.isSelected}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selectedRow: state.manageUsers.selectedRow,
  sortDir: state.manageUsers.sortDir,
  isCurrentUserSelected: state.auth.currentUser && state.auth.currentUser._id === state.manageUsers.selectedRow,
  currentUser: state.auth.currentUser,
  users: state.manageUsers.users,
});

const mapDispatchToProps = (dispatch) => ({
  sortUsers: (sortDir) => dispatch(manageUsers.sortUsers(sortDir)),
  handleRowSelection: (selectedRow) => dispatch(manageUsers.setSelectedRow(selectedRow)),
  usersApiRequest : (params) => dispatch(manageUsers.usersApiRequest(params)),
  usersApiDeleteRequest : () => dispatch(manageUsers.userApiDeleteRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsersContainer);
