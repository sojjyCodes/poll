import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Containers from "./components/Container";
import Home from "./components/Home";
import Result from "./components/Result";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";

function App() {
    return (
        <div className="app">
            <Containers />

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/result" component={Result} />
                    <Route path="/login" component={Login} />
                    <Layout>
                        <Route component={NoMatch} />
                    </Layout>
                </Switch>
            </Router>
            <footer className="footer">
                <p id="footer-text">
                    <center>
                        Created With Love By
                        <a
                            href="https://github.com/sojjyCodes"
                            className="link"
                        >
                            {" "}
                            sojjyCodes
                        </a>{" "}
                        ©2020
                    </center>
                </p>
            </footer>
        </div>
    );
}

export default App;