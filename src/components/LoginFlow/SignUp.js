import React, { Component } from 'react';
import './SignUp.css';
import {Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import Header from "../welcomeScreen/welcomeScreen";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Name",
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
            <div className="signup-top-container">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="name"
                                name="name"
                                id="name"
                                placeholder={this.state.name}
                                onChange={this.handleEmailChange}
                            />
                        </FormGroup>
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
                                <Button color="link">Have an account?</Button>
                            </Col>
                            <Col xs="6">
                                <Button color="success">Create Account</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;
