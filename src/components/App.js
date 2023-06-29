import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {

    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(questionData => setQuestions(questionData))

  }, [])

  function handleItemAdd(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDelete(question) {
    const updatedList = questions.filter(item => item.id !== question.id);

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => { setQuestions(updatedList) })
  }

  function updateIndex(updated) {
    const updatedQuestions = questions.map((item) => {
      if (item.id === updated.id) {
        return updated;
      } else {
        return item;
      }
    });
    setQuestions(updatedQuestions);
  }

  function CorrectedIndexChange(event, id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correctIndex: event.target.value,
      })
    })
      .then(r => r.json())
      .then((updated) => {
        updateIndex(updated)
      })

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={handleItemAdd} /> : <QuestionList questions={questions} handleDelete={handleDelete} onCorrectIndexChange={CorrectedIndexChange} />}
    </main>
  );
}

export default App;
