import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CampaignComments from "../trackInfo";
import {PLAYLIST} from "../../../data.constants";
import Paper from '@material-ui/core/Paper';

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
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #ccc',
    },
    tabsIndicatorRoot: {
        width: 50,
    },
    tabsIndicator: {
        width: 50,
        backgroundColor: '#DB5643',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 50,
        width: 120,
        fontWeight: 700,
        marginRight: 0,
        color: '#555555',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#000000',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#000000',
            fontWeight: 700,
        },
        '&:focus': {
            color: '#000000',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

function handleActive(tab) {
    alert(0);
}

class CompaignSlider extends React.Component {

    constructor({ }) {
        super();
        this.state = {
            value: 2,
        };
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.callbackFromParent(value);
    };

    handleActive = (tab) => {
       // alert(`A tab was activated.`);
    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Tabs value={value}
                      onChange={this.handleChange}
                      classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                >
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Story"
                        data-route="0"
                        onActive={this.handleActive}
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Updates"
                        data-route="1"
                        onActive={this.handleActive}
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Comments"
                        data-route="2"
                        onActive={this.handleActive}
                    />
                </Tabs>
                {/*<Typography className={classes.typography}>Ant Design UI powered by Material-UI</Typography>*/}
            </div>
        );
    }
}

CompaignSlider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompaignSlider);
