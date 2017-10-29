import React from 'react';

import CardData from '../CardData/CardData';

import './CardsData.css';

const CardsData = ({ users, remove, handleRowSelection, selectedRow, isCurrentUserSelected, edit }) => users.map((user,index) => (
  <CardData 
    fileUrl={user.fileUrl} 
    number={index} 
    email={user.email} 
    remove={remove} 
    handleRowSelection={handleRowSelection}
    isCardSelected={user._id === selectedRow}
    isCurrentUserSelected={isCurrentUserSelected}
    edit={edit}
  />)
);

export default CardsData;