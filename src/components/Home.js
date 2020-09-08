import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Poll from "react-polls";
import "./home.css";
import Result from "./Result";

function Home() {
  return (
    <div>
      <Card
        style={{
          borderRadius: "10px",
          margin: "50px",
          height: "30vh",
          width: "850px",
          backgroundColor: "#a1a6a8",
        }}
      >
        <Card.Title style={{ color: "green" }}>Web Design</Card.Title>
        <Card.Body style={{fontSize: "25px", fontWeight: "bold", fontStyle: "italic"}}>
          What is your prefered Javascript Framework for Web Development
        </Card.Body>
      </Card>
    </div>
  );
}
export default Home;
