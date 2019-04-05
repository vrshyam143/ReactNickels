import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageAvatar from '../ImageAvatar/ImageAvatar';
import LocalGasStation from '@material-ui/icons/LocalGasStation'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ArrowUpward from '@material-ui/icons/ArrowUpward'

const styles = theme => ({
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    maxWidth: 350,
    borderRadius: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  moneyInputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class NotificationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      moneyInput: '',
      expanded: false ,
      showNotification: true
    };
  }
  

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleShowNotification = () => {
    this.setState({
      showNotification: false
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
         <div>
          <ImageAvatar><h1>Notifications</h1></ImageAvatar>
        </div>
        <div className={classes.cardWrapper}>
          { this.state.showNotification &&
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    <LocalGasStation/>
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Royal Dutch Shell | Hillsborough St"
                subheader="April 4, 2019"
              />
              <CardContent>
                <Typography component="p">
                  I see you recently purchased gas at Shell on 4/4/19 at 5:30 pm, would you like to put in the exact amount to see your remaining available balance?
                </Typography>

                <div className={classes.moneyInputWrapper}>
                  <TextField
                    id="outlined-name"
                    label="$"
                    className={classes.textField}
                    value={this.state.moneyInput}
                    onChange={this.handleChange('moneyInput')}
                    margin="normal"
                    variant="outlined"
                  />

                  <Fab size="small" color="primary" aria-label="Add" className={classes.fab} onClick={this.handleShowNotification}>
                    <ArrowUpward />
                  </Fab>
                </div>
              </CardContent>
            </Card>
          }

          { !this.state.showNotification &&
            <p>Thanks, this will be placed in your transportation category !</p>
          }
        </div>
      </div>
    );
  }
}

NotificationPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationPage);