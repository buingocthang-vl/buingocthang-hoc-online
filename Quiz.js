
import questions from '../data/questions';

export default function Quiz() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Câu hỏi trắc nghiệm</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-medium">{i + 1}. {q.question}</p>
          <ul className="ml-4 list-disc">
            {q.options.map((opt, j) => (
              <li key={j}>{opt}</li>
            ))}
          </ul>
          <p className="text-green-600 mt-1">✅ Đáp án đúng: {q.answer}</p>
        </div>
      ))}
    </div>
  );
}
