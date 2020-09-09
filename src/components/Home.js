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
                            Today's Selection <IoMdPodium />
                        </h1>
                    </div>
                    <div>
                        <a href="/result">
                            <Card
                                bg="info"
                                border="success"
                                style={styles.card}
                            >
                                <Card.Header style={{ color: "black" }}>
                                    Web Design
                                </Card.Header>
                                <Card.Body style={styles.card_body}>
                                    What is your prefered Javascript Framework
                                    for Web Development
                                </Card.Body>
                                <Card.Footer>
                                    <small
                                        className="text-muted"
                                        style={styles.card_foooter}
                                    >
                                        Last updated 3 mins ago
                                    </small>
                                </Card.Footer>
                            </Card>
                        </a>
                    </div>
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

    card: {
        borderRadius: "10px",
        margin: "50px",
        height: "30vh",
        width: "850px",
    },

    card_body: {
        fontSize: "28px",
        fontWeight: "bold",
    },

    card_foooter: {
        fontSize: "15px",
    },
};

export default Home;
