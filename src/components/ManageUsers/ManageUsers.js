import React  from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import ArrowDownWard from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUpWard from 'material-ui/svg-icons/navigation/arrow-upward';

import Table from '../TableData/TableData';
import CardsData from '../CardsData/CardsData';

import './ManageUsers.css';



const ManageUsers = ({remove, edit, userDeleted, sort, selectedRow, isCurrentUserSelected, sortDir,handleRowSelection,users,isSelected}) => 
    (
      <div className="manage-users">
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Users"/>
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <RaisedButton
              className="delete-button"
              label="Delete"
              primary={true}
              onClick={remove}
              disabled={!selectedRow || isCurrentUserSelected}
            />
            <RaisedButton
              className="edit-button"
              label="Edit"
              primary={true}
              onClick={edit}
              disabled={!selectedRow}
            />
            <RaisedButton
              label="Sort"
              labelPosition="before"
              icon={sortDir === 'ASC' ? <ArrowUpWard/> : <ArrowDownWard/> }
              primary={true}
              onClick={sort}
            />
          </ToolbarGroup>
        </Toolbar>
        <div className="manage-users__table">
          <Table 
            handleRowSelection={handleRowSelection} 
            users={users} 
            isSelected={isSelected}
          />
        </div>
        <div className="manage-users__cards">
          <CardsData
            users={users}
            remove={remove}
            handleRowSelection={handleRowSelection}
            selectedRow={selectedRow}
            isCurrentUserSelected={isCurrentUserSelected}
            edit={edit}
          />
        </div>
      </div>
  );

export default ManageUsers;