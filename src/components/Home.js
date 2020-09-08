import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Poll from "react-polls";
import "./home.css";

function Home() {
  return (
    <div>
      <Card
        style={{
          borderRadius: "10px",
          margin: "30px",
          height: "30vh",
          width: "850px",
          backgroundColor: "#a1a6a8",
        }}
      >
        <Card.Title style={{ color: "green" }}>Web Design</Card.Title>
        <Card.Body>
          What is your prefered Javascript Framework for Web Development
        </Card.Body>
      </Card>
    </div>
  );
}
export default Home;
