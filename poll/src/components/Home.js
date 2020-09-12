import React, { Component } from "react";
import { IoMdPodium } from "react-icons/io";
import { Card, Button, Image, Container, Row } from "react-bootstrap";
import Poll from "react-polls";
import Jombotron from "./Jombotron";
import "./home.css";

function Home() {
    return (
        <div>
            <Jombotron />
            <Container>
                <Row md>
                    <div className="component">
                        <h1 style={styles.container}>
                            Today's Selection <IoMdPodium style={styles.icon}/>
                        </h1>
                    </div>

                    <Card bg="info" border="success" style={styles.card}>
                        <Card.Header style={{ color: "black" }}>
                            Web Design
                        </Card.Header>
                        <a href="/result">
                            <Card.Body style={styles.card_body}>
                                What is your prefered Javascript Framework for
                                Web Development
                            </Card.Body>
                        </a>

                        <Card.Footer>
                            <small style={styles.card_foooter}>
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

const styles = {
    container: {
        color: "rgb(44, 202, 250)",
        marginTop: "40px",
    },
    icon: {
        fontSize: "20px",
    },
    card: {
        borderRadius: "10px",
        margin: "50px",
    },

    card_body: {
        fontSize: "28px",
        fontWeight: "bold",
        textDecoration: "none",
    },

    card_foooter: {
        fontSize: "15px",
        color: "white",
    },
};

export default Home;
