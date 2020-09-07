import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Poll from "react-polls";
import "./home.css";

function Home() {
  return (
    <div>
      <Card
        style={{
          height: "30vh",
          justifyContent: "center",
          alignContent: "center",
          width: "850px",
          backgroundColor: "#a1a6a8",
        }}
      >
        <Card.Body>
          What is your prefered Javascript Framework for Web Development
        </Card.Body>
      </Card>
    </div>
  );
}
export default Home;
