import React, { Component } from 'react';
import './LogIn.css';
import { Button, Form, FormGroup, Label, Input, Row, Col  } from 'reactstrap';
import Header from "../welcomeScreen/welcomeScreen";

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "Email address",
            password: "Password"
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.email + " " + this.state.password + " ");
        event.preventDefault();
    }

    render() {
        return (
            <div className="top-container">
            <div className="login">
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </FormGroup>
                    <Row>
                        <Col xs="6">
                            <Button color="link">Don't have an account?</Button>
                        </Col>
                        <Col xs="6">
                            <Button color="success">Sign in</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            </div>
        );
    }
}

export default LogIn;
