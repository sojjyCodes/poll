import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

function Jombotron() {
    return (
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Sojjy's Poll</h1>
                <p>A site we developers can come to answer polls</p>
            </Container>
        </Jumbo>
    );
}

export default Jombotron;
