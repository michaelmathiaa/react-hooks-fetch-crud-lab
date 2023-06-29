import React from "react";

function QuestionItem({ question, handleDelete, onCorrectIndexChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));




  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => onCorrectIndexChange(e, id)}>{options}</select>
      </label>
      <button onClick={() => handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
