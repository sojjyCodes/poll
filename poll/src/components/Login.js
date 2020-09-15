import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import "./login.css";
function Login() {
    return (
        <div className="app">
            <Container style={styles.container}>
                <Card stle={styles.card}>
                    <form>
                        <h3 className="head">Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                id="id"
                                type="email"
                                className="form-control"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                id="id"
                                type="password"
                                className="form-control"
                                placeholder="*************"
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <Button href="#" type="submit" className="submit-btn">
                            Submit
                        </Button>
                        <p className="text-left">
                            Forgot <a href="/verify">password?</a>
                        </p>
                        <p className="text-down">
                            <a href="/signup">Don't have an account?</a>
                        </p>
                    </form>
                </Card>
            </Container>
        </div>
    );
}

const styles = {
    container: {
        marginTop: "100px",
        borderMargin: "50px",
        width: "750px",
    },
};
export default Login;
