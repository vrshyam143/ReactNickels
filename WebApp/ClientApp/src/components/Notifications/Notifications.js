import React from 'react';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

class Notifications extends React.Component {

  render() {
    const { classes } = this.props;

    return( <div>
    <Badge className={classes.margin} badgeContent={1} color="primary">
      <NavLink
        to='/NotificationPage'
        activeStyle={{
            textDecoration: 'none'
        }}
      >
        <MailIcon style={{color:'black'}} />
      </NavLink>
    </Badge>
  </div>
  )}
};

export default withStyles(styles)(Notifications);
