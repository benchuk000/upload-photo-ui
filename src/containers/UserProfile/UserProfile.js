import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../components/UserProfile/UserProfile';

import * as userProfile from '../../actions/userProfile';

class UserProfileContainer extends Component{

  componentDidMount() {
    this.props.userApiRequest();
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  onfileChange = (event) => {
    let tgt = event.target || window.event.srcElement;
    let files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
      let fr = new FileReader();
      fr.onload = (e) => this.props.setImg(e.target.result, this.fileUploader.files[0]);
      fr.readAsDataURL(files[0]);
    }
  }

  edit = (e) => {
    e.preventDefault();

    this.props.userApiUpdateRequest();
  }

  render(){
    return (
      <UserProfile 
        onChange={this.props.setField}
        edit={this.edit}
        email={this.props.user.email}
        password={this.props.user.password}
        fileUploaderRef={(fileUploader) => this.fileUploader = fileUploader}
        onfileChange={this.onfileChange}
        newImg={this.props.newImg}
        fileUrl={this.props.user.fileUrl}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userProfile.user,
  newImg: state.userProfile.newImg,
});

const mapDispatchToProps = (dispatch, { match }) => ({
  userApiRequest: () => dispatch(userProfile.userApiRequest(match.params.id)),
  userApiUpdateRequest: () => dispatch(userProfile.userApiUpdateRequest(match.params.id)),
  setField: (name,value) => dispatch(userProfile.setField(name,value)),
  setImg: (newImg, fileImg) => dispatch(userProfile.setImg(newImg, fileImg)),
  resetData: () => dispatch(userProfile.resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);

