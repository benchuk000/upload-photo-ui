import React from 'react';

import './Header.css';
import HeaderModal from '../../containers/HeaderModal/HeaderModal';

const Header = ({ children }) => (
  <div className="header">
    <div className="header__logo">
      <img  className="header__logo__img"/>
    </div>
    <div className="header__buttons">
      { children }
    </div>

    <HeaderModal/>
  </div>
);

export default Header;