import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Notification from '../Notifications/Notifications'

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  ImageAvatarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ImageAvatarGrid: {
    width: 'auto'
  }
};

function ImageAvatar(props) {
  const { classes } = props;
  return (
    <div className={classes.ImageAvatarWrapper}>
      <Grid container justify="flex-start" alignItems="center" className={classes.ImageAvatarGrid}>
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} /> */}
        <Avatar alt="Remy Sharp" src="https://www.fillmurray.com/80/80" className={classes.bigAvatar} />
      </Grid>
      {props.children}
      <Notification />
    </div>
    
  );
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);