import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MUIDataTable from 'mui-datatables';


const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    tableWrapper: {
        marginBottom: '10px'
    }
});

class TransactionTable extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
  

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const columns = ["Date", "Description", "Type", "Amount"];

        //axios.get('/api/accttrans/pending/checking');
        const checkingPend = [
            ["4/4/2019", "SHELL SERVICE STATION", "MERCHANT HOLD", "-1.00"],
            ["4/3/2019", "LOWES", "DEBIT CARD PURCHASE-PIN", "-14.72"],
            ["4/2/2019", "DOLLAR TREE", "DEBIT CARD PURCHASE-PIN", "-10.45"]
            ];
        
        //axios.get('/api/accttrans/pending/savings');
        const savingsPend = [
            ["4/2/2019",  "COUNTER DEPOSIT", "ACH CREDIT", "+50.00"]
        ];
        //axios.get('/api/accttrans/completed/checking');
        const checkingPost = [
            ["3/29/2019", "JCWHITNEY", "DEBIT CARD PURCHASE", "-136.17"],
            ["3/27/2019", "SHELL SERVICE STATION", "DEBIT CARD PURCHASE-PIN", "-30.00"],
            ["3/2/2019", "DIRECTV", "TELEPHONE PAYMENT", "-80.00"]
        ];
        //axios.get('/api/accttrans/completed/savings');
        const savingsPost = [
            ["3/19/2019", "PR PAYMENT CAMC HEALTH SYST", "ACH DEBIT", "-74.10"],
            ["3/10/2019", "COUNTER TRANSFER", "TRNSFR FR CHK", "+50.00"]
        ];
        //const testdata =             

        const options = {
            responsive: 'scroll',
        };
        return (

            <div className={classes.root}>
                <h2 align="left">My Accounts</h2>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Checking</Typography>
                        <Typography className={classes.secondaryHeading}>$5,982.94</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <div className={classes.tableWrapper}>
                                <MUIDataTable
                                    title={"Pending"}
                                    data={checkingPend} //{testdata.data}
                                    columns={columns}
                                    options={options}
                                    
                                />
                            </div>
                            <div>
                                <MUIDataTable
                                    title={"Processed"}
                                    data={checkingPost} //{testdata.data}
                                    columns={columns}
                                    options={options}
                                />
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Savings</Typography>
                        <Typography className={classes.secondaryHeading}>$3,254.12</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <div className={classes.tableWrapper}>
                                <MUIDataTable
                                    title={"Pending"}
                                    data={savingsPend}
                                    columns={columns}
                                    options={options}
                                    
                                />
                            </div>
                            <div>
                                <MUIDataTable
                                    title={"Posted"}
                                    data={savingsPost}
                                    columns={columns}
                                    options={options}
                                />
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

            </div>
        );
    }
}

TransactionTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionTable);