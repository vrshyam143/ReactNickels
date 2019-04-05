import React from 'react';
import TransactionTable from '../components/TransactionTable/TransactionTable';
import ImageAvatar from '../components/ImageAvatar/ImageAvatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DashboardDetails from './DashboardDetails';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        esponsive: 'scroll',
    },
});

class HomePage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>

                <AppBar position="static" color="default">
                    
                        <ImageAvatar>
                    
                    
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            
                            >
                        <Tab label="Accounts" />
                        <Tab label="Dashboard" />
                        </Tabs></ImageAvatar>
                </AppBar>
                {value === 0 && <TabContainer>
                    <div>
                       <TransactionTable />
                    </div>
                </TabContainer>}
                {value === 1 && <TabContainer><DashboardDetails /></TabContainer>}

            </div>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
