import React, { Component } from "react";
import Poll from "react-polls";
import "./home.css";

const pollQuestions = "What is the best Javascript Framework?";
const pollAnswers = [
  { option: "React", votes: 40 },
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
        <Poll
          question={pollQuestions}
          answers={pollAnswers}
          onVote={this.handleVote}
          theme="purple"
          noStorage
          customStyles={{ theme: "purple" }}
        />
      </div>
    );
  }
}
