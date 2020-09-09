import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./jombotron.css";

function Jombotron() {
    return (
        <Jumbo fluid className="jumbo">
            <div className="app__container">
                <Container>
                    <div className="text">
                        <h1>Sojjy's Poll</h1>
                        <p>A site where developers can come to answer polls</p>
                    </div>
                </Container>
            </div>
        </Jumbo>
    );
}

export default Jombotron;
