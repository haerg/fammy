import React, { Component } from 'react';
import './compaignChanges.css';
import { withStyles } from '@material-ui/core';

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

class CampaignChanges extends Component {

    constructor({ updates }) {
        super();

        this.state = {
            symbolsLeft: 500,
            newComment: '',
            updates,
        };
    }

    formatDate(param) {
        const date = new Date(param);
        var dd = date.getDate();
        var mm = date.getMonth() + 1;

        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;
    }

    render = () => {

        const comments = this.state.updates.map((item, index) =>
            <div className="campaign__comment" key={index}>
                <div className="campaign__comment__avatar">
                    <img alt="" src={item.user.avatarUrl}/>
                </div>
                <div className="campaign__comment__data">
                    <div className="campaign__comment__header">
                        <div className="campaign__comment__header__name">{item.user.name}</div>
                        <div className="campaign__comment__header__date">{this.formatDate(
                            item.user.date)}</div>
                    </div>
                    <div className="campaign__comment__text">{item.text}</div>
                </div>
            </div>,
        );

        return (
            <div className="campaign__comments">
                {comments}
            </div>
        );

    };
}

export default withStyles(styles)(CampaignChanges);
