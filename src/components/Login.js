import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";

function Login() {
    return (
        <Container style={styles.container}>
            <Card>
                <Card.Body>Login Page</Card.Body>
            </Card>
        </Container>
    );
}

const styles = {
    container: {
        marginTop: "100px",
    },
};
export default Login;
