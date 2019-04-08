import React, { Component } from 'react';
import './compaignStory.css';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        backgroundColor: '#DB5643',
        color: 'white',
        '&:hover': {
            backgroundColor: '#DB5643',
        },
    },
    normalLabel: {
        textTransform: 'none',
    },
});

class CampaignStory extends Component {

    constructor({ story }) {
        super();

        this.state = {
            symbolsLeft: 500,
            newComment: '',
            story,
        };
    }

    render = () => {
        return (
            <div className="campaign__story">
                <div className="campaign__story__data">
                    <Typography component="p" variant="subtitle1">
                        {this.props.story}
                    </Typography>
                </div>
            </div>
        );

    };
}

export default withStyles(styles)(CampaignStory);
