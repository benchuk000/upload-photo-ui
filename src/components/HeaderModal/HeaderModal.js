import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';

const HeaderModal = ({ isOpen, handleClose, selectedTab, onTabChange, signIn, signUp, email, password, setData }) => (
  <Dialog
    onRequestClose={handleClose}
    open={isOpen}
    contentStyle={{ width: 450 }}
    bodyStyle={{ padding: 0 }}
  >
    <Tabs value={selectedTab} onChange={onTabChange}>
      <Tab label="Войти" value="SIGN_IN">
        <Form 
          email={email}
          password={password}
          onSubmit={signIn}
          onChange={setData}
          submitButtonLabel="Войти"
        />
      </Tab>
      <Tab label="Регистрация" value="SIGN_UP">
        <Form 
          email={email}
          password={password}
          onSubmit={signUp}
          onChange={setData}
          submitButtonLabel="Зарегистрироваться"
        />
      </Tab>
    </Tabs>
  </Dialog>
);

const Form = ({ email = '', password = '', onSubmit, onChange, submitButtonLabel }) => (
  <form onSubmit={onSubmit} style={{padding: '5px 7px'}} autocomplete="false">
    <TextField
      type="email"
      required={true}
      hintText="Email address" 
      name="email"
      value={email}
      onChange={onChange}
      fullWidth={true}
    />
    <TextField
      required={true}
      hintText="Password" 
      type="password"
      name="password"
      value={password}
      onChange={onChange}
      fullWidth={true}
    />

    <div>
      <FlatButton
        type="submit"
        label={submitButtonLabel}
        primary={true}
      />
    </div>
  </form>
);

export default HeaderModal;