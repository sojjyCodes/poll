import React, { Component, useState } from "react";
//import BackToTop from "react-back-to-top";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { IoMdPodium, IoMdLogOut, IoMdPerson } from "react-icons/io";
import Home from "./Home";
import "./container.css";

function Containers() {
    const User = "sojjyCodes";

    return (
        <div className="app">
            <Navbar variant="dark" style={styles.navbar}>
                <Navbar.Brand href="/">
                    sojjy's Poll
                    <IoMdPodium />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" disabled>
                            Login
                        </Nav.Link>
                        <Nav.Link
                            href="/signup"
                            style={styles.nav_link}
                            disabled
                        >
                            Sign Up
                        </Nav.Link>

                        <Dropdown drop="down">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <IoMdPerson style={styles.icon} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu alignRight="false">
                                <Dropdown.Item
                                    style={styles.drop_down}
                                    href="/login"
                                >
                                    Logout <IoMdLogOut />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
            >
                <span>scroll up</span>
            </BackToTop>
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

    drop_down: {
        color: "#5f54ff",
    },
};

export default Containers;
