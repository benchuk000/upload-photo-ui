import React from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import './CardData.css';

const style = {
  width: '300px',
}

const CardData = ({fileUrl, number, email, remove, handleRowSelection,isCurrentUserSelected, isCardSelected, edit}) => (
<div className="card-data">
  <Card style={style} onClick={() =>  handleRowSelection([number])}>
    <CardHeader
      title={`User № ${number+1}`}
      avatar={fileUrl && `http://localhost:4848/${fileUrl}`}
    />
    <CardTitle title="user information" subtitle={`email: ${email}`} />
    <CardActions>
    <RaisedButton
      label="Delete"
      primary={true}
      onClick={remove}
      disabled={!isCardSelected || isCurrentUserSelected}
    />
    <RaisedButton
      label="Edit"
      primary={true}
      onClick={edit}
      disabled={!isCardSelected}
    />
    </CardActions>
  </Card>
</div>
);

export default CardData;

