import React from "react";
import {
    Navbar,
    Nav,
    Dropdown,
    Jumbotron as Jumbo,
    Container,
} from "react-bootstrap";
import { IoMdPodium, IoMdLogOut, IoMdPerson } from "react-icons/io";
import "./jombotron.css";

export function JumboNav() {
    const User = "sojjyCodes";
    return (
        <div>
            <Navbar variant="dark" style={styles.navbar} sticky="bottom">
                <Navbar.Brand href="/">
                    <span>sojjy's Poll</span> <IoMdPodium />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Item style={styles.nav_link}>{User}</Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
function Jombotron() {
    return (
        <div>
            <Jumbo fluid className="jumbo">
                <div className="app__container">
                    <Container>
                        <div className="text">
                            <h1>Sojjy's Poll</h1>
                            <p>
                                A site where developers can come to answer polls
                            </p>
                        </div>
                    </Container>
                </div>
            </Jumbo>
        </div>
    );
}
const styles = {
    navbar: {
        backgroundColor: "#24292E",
    },

    nav_link: {
        marginRight: "15px",
    },

    icon: {
        color: "#007CFF",
    },
};
export default Jombotron;
