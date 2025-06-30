import Head from 'next/head';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <Head>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </Head>
      <main style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Trắc nghiệm Vật Lí</h1>
        <Quiz />
      </main>
    </div>
  );
}