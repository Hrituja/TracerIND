import React from 'react';
import './Login.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { authenticationService } from '../../services';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        if (authenticationService.currentUserValue) {
            this.props.history.push('/');
        }
    }

    login = () => {
        let { username, password } = this.state;
        authenticationService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => {
                    console.log(error);
                }
            );
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        return (
            <Container style={{ marginTop: "10vh", textAlign: "center" }}>
                <Row className="heading">
                    <Col>
                        <h2>Welcome to TracerIND</h2>
                    </Col>
                </Row>
                <fieldset style={{ marginTop: "10vh"}}>
                    <legend>Enter your Login Details</legend>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="username">
                                <Col md={6} sm={12}>
                                    <Form.Label>Username :</Form.Label>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Form.Control placeholder="Enter username" onChange={this.handleChange('username')} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="password">
                                <Col md={6} sm={12}>
                                    <Form.Label>Password :</Form.Label>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Form.Control placeholder="Enter password" type="password" onChange={this.handleChange('password')} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: "center", margin: "1rem" }}>
                        <Col>
                            <Button className="cool-button" size="lg" onClick={this.login}>Login</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Container>
        )
    }
}

export default Login;