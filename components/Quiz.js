import { useEffect, useState } from "react";
import questions from "../questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState([]);

  const q = questions[current];

  useEffect(() => {
    if (window.MathJax) window.MathJax.typeset();
  }, [current, showAnswer]);

  const checkAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);
  };

  const next = () => {
    setCurrent(current + 1);
    setSelected(answers[current + 1] || null);
    setShowAnswer(answers[current + 1] !== undefined);
  };

  const prev = () => {
    setCurrent(current - 1);
    setSelected(answers[current - 1] || null);
    setShowAnswer(answers[current - 1] !== undefined);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <div className="question" dangerouslySetInnerHTML={{ __html: `<strong>Câu ${current + 1}:</strong> ${q.question}` }} />
      <div style={{ marginTop: 10 }}>
        {q.options.map((opt, idx) => {
          const optLetter = opt[0];
          const isCorrect = optLetter === q.answer;
          const isSelected = selected === optLetter;

          let style = {
            display: "block",
            padding: "8px",
            margin: "6px 0",
            borderRadius: 4,
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            cursor: "pointer"
          };
          if (showAnswer && isCorrect) style.backgroundColor = "#c8f7c5";
          if (showAnswer && isSelected && !isCorrect) style.backgroundColor = "#f7c5c5";

          return (
            <button key={idx} onClick={() => checkAnswer(optLetter)} style={style} disabled={showAnswer}>
              {opt}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 20 }}>
        {current > 0 && (
          <button onClick={prev} style={{ marginRight: 10, padding: 10 }}>
            ⬅ Câu trước
          </button>
        )}
        {showAnswer && current < questions.length - 1 && (
          <button onClick={next} style={{ padding: 10 }}>
            Câu tiếp ➡
          </button>
        )}
      </div>
    </div>
  );
}