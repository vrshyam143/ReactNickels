import React, { Component } from 'react';
import PercentageBar from './PercentageBar/PercentageBar';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    textWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

class ProgressBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
        percentage: 70.5,
        spentAmt: props.spentAmt,
        budgetAmt : props.budgetAmt
    }
  }

    render() {
        const { classes } = this.props;
    return (
      <div >
            <PercentageBar percentage={this.state.percentage} />
            <div className={classes.textWrapper}><span>${this.state.spentAmt} spent</span><span>${this.state.budgetAmt} Budget</span></div>
      </div>
    )
  }
}

export default withStyles(styles)(ProgressBar);