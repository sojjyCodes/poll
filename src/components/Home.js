import React, { Component } from "react";
import { Card, Button, Image } from "react-bootstrap";
import Poll from "react-polls";
import "./home.css";
import Result from "./Result";

function Home() {
    return (
        <div>
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
                <Card.Header style={{ color: "black" }}>Web Design</Card.Header>
                <Card.Body
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                    }}
                >
                    What is your prefered Javascript Framework for Web
                    Development
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </Card.Footer>
            </Card>
        </div>
    );
}
export default Home;
