import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Avatar from 'material-ui/Avatar';


const TableData = ({handleRowSelection, users, isSelected}) => (
  <Table 
    onRowSelection={handleRowSelection}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>№</TableHeaderColumn>
        <TableHeaderColumn>E-Mail</TableHeaderColumn>
        <TableHeaderColumn>Avatar</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      deselectOnClickaway={false}
      displayRowCheckbox={false}
      showRowHover={true}
      stripedRows={true}>
      { users.map((user,index) => {
        return <TableRow selected={isSelected(index)}>
          <TableRowColumn>{index+1}</TableRowColumn>
          <TableRowColumn>{user.email}</TableRowColumn>
          <TableRowColumn>
            <Avatar
              src={user.fileUrl && `http://localhost:4848/${user.fileUrl}`}
            />
          </TableRowColumn>
        </TableRow>
      })}
    </TableBody>
  </Table>
);

export default TableData;