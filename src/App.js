import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Home from "./components/Home";
import Result from "./components/Result";
import NoMatch from "./components/NoMatch";

function App() {
    return (
        <div>
            <Container />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/result" component={Result} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
