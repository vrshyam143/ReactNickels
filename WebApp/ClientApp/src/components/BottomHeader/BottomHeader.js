import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../../containers/Dashboard';
import Chat from '../../containers/Chat';
import Budget from '../../containers/Budget';
import MoreInfo from '../../containers/More';
import NotificationPage from '../../components/NotificationPage/NotificationPage';


const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    height: '100%',
    paddingBottom: '65px',
    boxShadow: 'none',
    marginBottom: '5px',
    background: 'none',
    overflow: 'auto'
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#80cbc4'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

function BottomHeader(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper square className={classes.paper}>
        {/* <h1>Budget</h1> */}
        <Route path="/" exact component={Dashboard}/>
        <Route path="/Chat" exact component={Chat}/>
        <Route path="/Budget" exact component={Budget}/>
        <Route path="/More" exact component={MoreInfo}/>
        <Route path="/NotificationPage" exact component={NotificationPage}/>
      </Paper>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <NavigationItems/>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

BottomHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomHeader);
