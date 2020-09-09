import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Containers from "./components/Container";
import Home from "./components/Home";
import Result from "./components/Result";
import NoMatch from "./components/NoMatch";
import Jombotron from "./components/Jombotron";

function App() {
    return (
        <div>
            <Containers />
            <Jombotron />
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/result" component={Result} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Layout>
        </div>
    );
}

export default App;
