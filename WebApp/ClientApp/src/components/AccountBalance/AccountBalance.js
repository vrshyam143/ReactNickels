import React from 'react';
import Typography from '@material-ui/core/Typography';

const AccountBalance = ( props ) => (
  <div>
    <Typography variant='p'>Monthly Income</Typography>
    <Typography variant='h3'>{props.amount}</Typography>
  </div>
)

export default AccountBalance;