import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from '../../axios';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './BudgetForm.css';
import { withStyles } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import AccountBalance from '../AccountBalance/AccountBalance';
import ProgressBar from '../ProgressBar/ProgressBar';
import BudgetCards from '../BudgetCards/BudgetCards';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


class BudgetForm extends Component {
  constructor ( props ) {
    super(props);
    
      this.state = {
    showForm : true,
      income: '',
      saving: '',
      housing: '',
      transportation: '',
      utilities: '',
      food: '',
      clothing: '',
      miscellaneous: '',
      personal: '',
      recreation: '',
      debts: '',
      percentOrDollar: '$',
      switchPorD: false,
      budgetData: []
      };

      
  }
    
  componentDidMount () {
    //this.loadData();
      if (localStorage.getItem('showbudgetform')) {
          console.log('value found in localstorage');
          this.setState({ showForm: false });
          this.loadData();
      }
      else {
          console.log('value NOT found in localstorage');
          localStorage.setItem('showbudgetform', 1);
      }
}

componentDidUpdate() {
    //this.loadData();
}

loadData () {
    if (  this.state.budgetData.length === 0 ) {
        axios.get('/api/budget/client/27027667')
            .then(response => {
                //console.log(response);
                this.setState({ income: response.data.monthlyBudget });
                this.setState({ budgetData: response.data.budgetItemList });
            });
          
    }
}

  postDataHandler = () => {
      const data = {
          clientID: 27027667,
          monthlyBudget: this.state.income,
          budgetItemList: [
              {
                  itemPercent: this.state.saving,
                  itemName: 'Savings',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.housing,
                  itemName: 'Housing',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.transportation,
                  itemName: 'Transportation',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.utilities,
                  itemName: 'Utilities',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.food,
                  itemName: 'Food',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.clothing,
                  itemName: 'Clothing',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.miscellaneous,
                  itemName: 'Misc',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.personal,
                  itemName: 'Personal',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.recreation,
                  itemName: 'Recreation',
                  limitAmt: 0,
                  spentAmt: 0
              },
              {
                  itemPercent: this.state.debts,
                  itemName: 'Debt',
                  limitAmt: 0,
                  spentAmt: 0
              }

          ]
         
      };
      axios.post('/api/budget/SaveBudget', data)
          .then(response => {
              console.log(response);
              this.setState({ showForm: false });
              this.loadData();
          });
  }

  handleChange = formValue => event => {
    this.setState({ [formValue]: event.target.value });
  };

  handlePerncentOrDollar = ( name ) => event => {
    this.setState({ 
      [name]: event.target.checked,
      percentOrDollar: this.state.switchPorD ? '$' : '%' 
    });
  }

  render () {
    const { classes } = this.props;

    return (
      <div>
            {this.state.showForm && 
          <div style={{ paddingBottom: '70px'}}>
            <p>Welcome,</p>
            <p>let's get started by setting up your budget.</p>
            <FormGroup>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.switchPorD}
                    onChange={this.handlePerncentOrDollar('switchPorD')}
                  />
                }
                label='Budget By Percent'
              />
            </div>
            <form>
              <TextField
                id="standard-income"
                label={`$ Monthly Income`}
                className="BudgetForm"
                value={this.state.income}
                onChange={this.handleChange('income')}
                margin="normal"
              />

              <TextField
                id="standard-saving"
                label={`${this.state.percentOrDollar} Saving`}
                className="BudgetForm"
                value={this.state.saving}
                onChange={this.handleChange('saving')}
                margin="normal"
              />

              <TextField
                id="standard-housing"
                label={`${this.state.percentOrDollar} Housing`}
                className="BudgetForm"
                value={this.state.housing}
                onChange={this.handleChange('housing')}
                margin="normal"
              />

              <TextField
                id="standard-transportation"
                label={`${this.state.percentOrDollar} Transportation`}
                className="BudgetForm"
                value={this.state.transportation}
                onChange={this.handleChange('transportation')}
                margin="normal"
              />

              <TextField
                id="standard-utilities"
                label={`${this.state.percentOrDollar} Utilities`}
                className="BudgetForm"
                value={this.state.utilities}
                onChange={this.handleChange('utilities')}
                margin="normal"
              />

              <TextField
                id="standard-food"
                label={`${this.state.percentOrDollar} Food`}
                className="BudgetForm"
                value={this.state.food}
                onChange={this.handleChange('food')}
                margin="normal"
              />

              <TextField
                id="standard-clothing"
                label={`${this.state.percentOrDollar} Clothing`}
                className="BudgetForm"
                value={this.state.clothing}
                onChange={this.handleChange('clothing')}
                margin="normal"
              />

              <TextField
                id="standard-miscellaneous"
                label={`${this.state.percentOrDollar} Miscellaneous`}
                className="BudgetForm"
                value={this.state.miscellaneous}
                onChange={this.handleChange('miscellaneous')}
                margin="normal"
              />

              <TextField
                id="standard-personal"
                label={`${this.state.percentOrDollar} Personal`}
                className="BudgetForm"
                value={this.state.personal}
                onChange={this.handleChange('personal')}
                margin="normal"
              />

              <TextField
                id="standard-recreation"
                label={`${this.state.percentOrDollar} Recreation`}
                className="BudgetForm"
                value={this.state.recreation}
                onChange={this.handleChange('recreation')}
                margin="normal"
              />

              <TextField
                id="standard-Debts"
                label={`${this.state.percentOrDollar} Debts`}
                className="BudgetForm"
                value={this.state.debts}
                onChange={this.handleChange('debts')}
                margin="normal"
              />
              <div>
                <Button variant="contained" color="default" onClick={this.postDataHandler} className={classes.button}>
                  Submit
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </div>
            </form>
          </FormGroup>
          </div>
        }
        
            {!this.state.showForm &&
          <div>
              <div className="account-balance__wrapper">
                <AccountBalance amount={this.state.income}/>
                <ProgressBar spentAmt={3255} budgetAmt={this.state.income} />
              </div>
              
              <BudgetCards cards={this.state.budgetData}/>
          </div> 
        }
      </div>
    )
  }
}
  


export default withStyles(styles)(BudgetForm);
