import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Paper from '@material-ui/core/Paper';
import Savings from '../images/savings_bal.PNG';
import Checking from '../images/Checking_bal.PNG';
import Spending from '../images/Spending.PNG';
import Coupon from '../images/Coupons.PNG';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 450,
        height: 650,
        transform: 'translateZ(0)',
    },
    buggyClass: {
        height: '80%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 255)',
    },
});

class GuttersGrid extends React.Component {
    state = {
        spacing: '10',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };
  

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        const tileData = [
            {
            img: Savings,
            title: '$9237.06 available',
            author: 'author',
            cols:1,
            },
            {
                img: Checking,
                title: '422 Rewards',
                author: 'author',
                cols: 2,
            }, {
                img: Spending,
                title: '$3255 Spending',
                author: 'author',
                cols: 3,
            }, {
                img: Coupon,
                title: '10% off',
                author: 'author',
                cols: 4,
            }


        ];

        return (
            <div className={classes.root}>
                <GridList cellHeight={225} className={classes.gridList} cols={2}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} classes={{
                            imgFullHeight: classes.buggyClass
                        }}>

                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                titlePosition="bottom"
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                 
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);