import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HandleGame from './game';
import HandleScore from './score';


class App extends Component {
  state = {
    numCorrect: 0,
    numQuestions: 0
  }
 handleAnswer = answerWasCorrect => {
   if(answerWasCorrect){
     this.setState((prevState) => ({
     numQuestions: prevState.numQuestions + 1
   }))}
     this.setState((prevState) => ({
     numCorrect: prevState.numCorrect + 1
   }))}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <HandleGame handleAnswer={this.handleAnswer} />
          <HandleScore numCorrect={this.state.numQuestions} numQuestions={this.state.numCorrect} />
        </div>
      </div>
    );
  }
}

export default App;
