import questions from '../questions';
import { useState } from 'react';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(correct) {
    if (correct) setScore(score + 1);
    setCurrent(current + 1);
  }

  if (current >= questions.length) {
    return <div>Điểm của bạn: {score}/{questions.length}</div>;
  }

  const q = questions[current];

  return (
    <div>
      <h2>{q.question}</h2>
      {q.options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(i === q.answer)}>{opt}</button>
      ))}
    </div>
  );
}