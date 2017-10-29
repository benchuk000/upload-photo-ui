import React from 'react';

import './App.css';
import Header from '../../containers/Header/Header';
import Main from '../Main/Main';
import ReduxToastr from 'react-redux-toastr';

const App = () =>  (
  <div>
    <Header/>
    <Main/>
    <ReduxToastr
      timeOut={2000}
      newestOnTop={true}
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  </div>
);

export default App;