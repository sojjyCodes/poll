import React, { Component } from "react";
import { IoMdPodium } from "react-icons/io";
import { Card, Button, Image, Container } from "react-bootstrap";
import Poll from "react-polls";
import Jombotron from "./Jombotron";
import "./home.css";

function Home() {
    return (
        <div>
            <Jombotron />
            <Container>
                <div className="component">
                    <h1
                        style={{
                            color: "rgb(44, 202, 250)",
                            marginTop: "40px",
                        }}
                    >
                        Today's Selection <IoMdPodium />
                    </h1>
                </div>
                <div>
                    <a href="/result">
                        <Card
                            bg="info"
                            border="success"
                            style={{
                                borderRadius: "10px",
                                margin: "50px",
                                height: "30vh",
                                width: "850px",
                                backgroundColor: "white",
                            }}
                        >
                            <Card.Header style={{ color: "black" }}>
                                Web Design
                            </Card.Header>
                            <Card.Body
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                }}
                            >
                                What is your prefered Javascript Framework for
                                Web Development
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    </a>
                </div>
            </Container>
        </div>
    );
}
export default Home;
