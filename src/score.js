import React from 'react';

function HandleScore(props) {
    return (
    <p className="text">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  );
}

export default HandleScore;