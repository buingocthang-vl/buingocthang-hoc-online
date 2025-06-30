import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Trắc nghiệm Vật Lí</h1>
      <Quiz />
      <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </div>
  );
}