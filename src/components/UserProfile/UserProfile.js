import React  from 'react';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


import './UserProfile.css'

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};


const UserProfile = ({edit, email, password, newImg, fileUrl, onChange, fileUploaderRef, onfileChange}) => (
  <div className="container">
  <div className="wrapper-user-data">
    <div className="user-data ">
    <form  onSubmit={edit} autoComplete="off">
        <div className="user-data__field">
          <TextField
            value={email || ""}
            required
            style={{width: '100%'}}
            floatingLabelText="E-mail *"
            type="email"
            errorText={email === '' ? 'This field is required' : ''}
            onChange={(event, email) => onChange('email', email)}
         />
       </div>
        <div className="user-data__field">
          <TextField
            type="password"
            value={password || ""}
          //disabled={this.props.isEditDisabled}
            style={{width: '100%'}}
            floatingLabelText="Password *"
            onChange={(event, password) => onChange('password', password)}
          />
        </div>
        <RaisedButton
            label="Save"
            primary={true}
            type="submit"
        />
     </form>
    </div>
    <div className="user-avatar ">
      <div className="user-avatar__image">
        <Avatar
          style={{
           height: 350,
            width: 350,
          }}
          src={newImg || (fileUrl && `http://localhost:4848/${fileUrl}`)}
        />
    </div>
      <div className="user-avatar__button">
      <FlatButton
        label="Choose an Image"
        labelPosition="before"
        style={styles.uploadButton}
        containerElement="label"
      >
        <input
          className="fileInput"
          style={styles.uploadInput}
          type="file"
          ref={fileUploaderRef}
          onChange={onfileChange}/>

      </FlatButton>
        </div>
  </div>
</div>
</div>
);

export default UserProfile;