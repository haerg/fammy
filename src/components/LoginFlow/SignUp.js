import React, { Component } from 'react';
import './SignUp.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from "../welcomeScreen/welcomeScreen";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "Email",
            password: "password"
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
                    <h1>Create Account</h1>
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
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" /> Remember Me
                            </Label>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;
