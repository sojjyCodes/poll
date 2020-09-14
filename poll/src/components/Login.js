import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import "./login.css";
function Login() {
    return (
        <div>
            <Container style={styles.container}>
                <Card stle={styles.card}>
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                className="user-id"
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                className="password-id"
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
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

                        <Button
                            href="/"
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Submit
                        </Button>
                        <p className="text-left">
                            Forgot <a href="/{}">password?</a>
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
        width: "750px",
    },
};
export default Login;
