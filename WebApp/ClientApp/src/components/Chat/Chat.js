import React, { Component } from 'react';
import Messages from './Messages/Messages';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Info from '@material-ui/icons/Info';
import Fab from '@material-ui/core/Fab';
import ArrowUpward from '@material-ui/icons/ArrowUpward'

import './chat.css';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
   
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 70,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputValue: '',
        open: false,
      messages: [
        {
          id: '2',
          message: 'Hello how can I help today?'
        },
        {
          id: '2',
          message: 'You can check a budget\'s statement by replying the category name.'
        }
        ]

    };
  }

  handleChange = formValue => event => {
    this.setState({ [formValue]: event.target.value });
    };
 

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
    onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.pushMessage();
        }
    }
  pushMessage = () => {

    const messagesArr = this.state.messages.slice()

    messagesArr.push({
      id: '1',
      message: this.state.inputValue
    })
      console.log(messagesArr);
     
      Chat.propTypes = {
          classes: PropTypes.object.isRequired,
      };

    this.setState({ messages: messagesArr})
    
    let inputV = this.state.inputValue.toLowerCase();

    switch ( inputV ) {
      case 'food':
        messagesArr.push({
          id: '2',
          message: <div>
            <h3>Food</h3>
            <p><strong>Available:</strong>$300</p>
            <p><strong>Spent:</strong> $100</p>
            <p><strong>Monthly:</strong> $400</p>
            <p><strong></strong></p>
          </div>
        })

        setTimeout(
          function() {
            this.setState({ messages: messagesArr})
          }
          .bind(this),
          3000
        );
      break
      case 'transportation':
        messagesArr.push({
          id: '2',
          message:<div>
            <h3>Transportation</h3>
            <p><strong>Available:</strong> $300</p>
            <p><strong>Spent:</strong> $200</p>
            <p><strong>Monthly:</strong> $500</p>
          </div>
        })

        setTimeout(
          function() {
            this.setState({ messages: messagesArr})
          }
          .bind(this),
          3000
        );
      break
      case 'clothing':
        messagesArr.push({
          id: '2',
          message:<div>
            <h3>Clothing</h3>
            <p><strong>Available:</strong> $100</p>
            <p><strong>Spent:</strong> $100</p>
            <p><strong>Monthly:</strong> $100</p>
          </div>
        })

        setTimeout(
          function() {
            this.setState({ messages: messagesArr})
          }
          .bind(this),
          3000
        );
      break
      case 'balance':
      messagesArr.push({
        id:'2',
        message:<div>
          <h3>Available Balance</h3>
          <p><strong>Available balance to spend: </strong>$145</p>
          <p><strong>Pending transaction: </strong>$250</p>
            <p><i><b className="warning-message">Note: </b>Pending transaction are not available immediately to spend.</i>
               
                
                <Info className="classes.icon" color="primary" onClick={this.handleOpen}/>
                    
               
                
            </p>
        </div>
       })
       setTimeout(
                function () {
                    this.setState({ messages: messagesArr })
                }
                    .bind(this),
                3000
       );
       break
      default: 
      messagesArr.push({
        id: '2',
        message:'Sorry I don\'t know that'
      })

      setTimeout(
        function() {
          this.setState({ messages: messagesArr})
        }
        .bind(this),
        3000
      );

      // this.state.messages.concat({
      //   id: '2',
      //   message:'Sorry I don\'t know that'
      // })
    }

    this.setState({
      inputValue: ''
    })
  }
    messagesEnd = React.createRef()

    componentDidMount() {
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom()
    }
    scrollToBottom = () => {
        this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        const { classes } = this.props;
        const { fullScreen } = this.props;
        
    return (
      <div className="chat">
        <div className="chat-title">
          <div className="avatar">
                    <img src="https://i.pinimg.com/474x/73/22/46/732246dc74fc508b41f5b7280320fc1e--corporate-photography-headshot-photography.jpg" alt="avatar" />
          </div>
          BBT Hackers
        </div>
            <div className="messages">
                <div className="messages-content">
                    { this.state.messages.map((message, i) => (
                      <Messages key={i} index={i} {...message}/>
                    ))}
                    <div ref={this.messagesEnd} />
                </div>
        </div>
            <div className="footer">
                <input type="text" placeholder="Type message" value={this.state.inputValue} onChange={this.handleChange('inputValue')} style={{ fontSize: 'inherit' }} autoFocus onKeyDown={this.onEnterPress} />
                <Fab size="small" color="primary" aria-label="Add" className={classes.fab} onClick={this.pushMessage}>
                    <ArrowUpward />
                </Fab>
                
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                fullScreen={fullScreen}>
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        How do pending transactions affect my balance?
                             </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        <div>
                            <p>Some card transactions will appear as pending on your account until the payment is fully processed. Generally it takes about 1 business days to process a transaction. However, if the deposit happens on Friday after 6:00 pm the pending transaction is posted on Monday night, in which the client will see this posted Tuesday morning. As we show two balances for your accounts; available funds balance and account balance, we'll explain how pending transactions affect each:</p>
                            <p>
                                <h4>Available Funds</h4>
                                Pending transactions only affect your available funds. While the transaction is pending, the transaction amount is deducted from your available funds.
                        </p>
                            <p>
                                <h4>Account Balance</h4>
                                Your account balance is not affected by a pending transaction; it only changes once the payment is fully processed.
                        </p>
                        </div>
                     </Typography>
                   
                </div>
            </Modal>
      </div>
    );
  }
}


export default withStyles(styles)(Chat);

