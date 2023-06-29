import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, handleDelete, onCorrectIndexChange }) {


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem question={question} key={question.id} handleDelete={handleDelete} onCorrectIndexChange={onCorrectIndexChange} />)}</ul>
    </section>
  );
}

export default QuestionList;
