import React, { useState } from 'react';

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    // Implement your quiz logic here
  };

  return (
    <section id="pokemon-quiz" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Pokemon Quiz</h2>
      <div id="quiz" className="p-4 bg-white rounded shadow">
        {!quizStarted && (
          <button onClick={startQuiz} className="px-4 py-2 bg-green-500 text-white rounded">Start Quiz</button>
        )}
        {quizStarted && (
          <div id="quiz-content" className="mt-4">
            <p id="quiz-question" className="text-lg font-semibold"></p>
            <div id="quiz-options" className="mt-2"></div>
            <button id="submit-answer" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hidden">Submit Answer</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
