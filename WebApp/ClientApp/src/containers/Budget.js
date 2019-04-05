import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BudgetForm from '../components/BudgetForm/BudgetForm';
import ImageAvatar from '../components/ImageAvatar/ImageAvatar';

const styles = {
}

class Budget extends Component {
  render () {
    return (
      <div>
         <ImageAvatar>
          <h1>Budget</h1>
         </ImageAvatar>
          <BudgetForm/>
      </div>
    )
  }
}

export default withStyles(styles)(Budget)
