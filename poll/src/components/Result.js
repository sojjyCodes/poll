import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Poll from "react-polls";
import "./home.css";

const pollQuestions = "What is the best Javascript Framework?";
const pollAnswers = [
    { option: "React.js", votes: 40 },
    { option: "Angular", votes: 10 },
    { option: "Vuejs", votes: 35 },
    { option: "None", votes: 3 },
];
export default class Result extends Component {
    state = {
        pollAnswers: [...pollAnswers],
    };

    handleVote = (voteAnswer) => {
        const { pollAnswers } = this.state;
        const newPollAnswers = pollAnswers.map((answer) => {
            if (answer.option === voteAnswer) answer.votes++;
            return answer;
        });
        this.setState({
            pollAnswers: newPollAnswers,
        });
    };

    render() {
        const { pollAnswers } = this.state;
        return (
            <div className="app">
                <Container style={styles.container} md>
                    <Poll
                        question={pollQuestions}
                        answers={pollAnswers}
                        onVote={this.handleVote}
                        theme="purple"
                        noStorage={true} // For development test only
                        customStyles={{ theme: "purple" }}
                    />
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: "100px",
        width: "500px",
    },
};
