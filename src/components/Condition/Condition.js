import React, { Component } from 'react';
import './Condition.css';
import {
    withRouter,
} from 'react-router-dom';

class Condition extends Component {


    render() {
        const { classes } = this.props;
        return (
            <div className="condition-background-view">


            </div>
        );
    }
}

export default (withRouter(Condition));