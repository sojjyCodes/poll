import React, { Component } from "react";
import Poll from "react-polls";
import "./home.css";

const pollQuestions = "Is react-polls useful?";
const pollAnswers = [
  { opiton: "Yes", votes: 8 },
  { option: "No", votes: 2 },
];
export default class Home extends Component {
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
        <h1>Home Page</h1>
        <Poll question={pollQuestions} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
}
