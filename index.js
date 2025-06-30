
import Head from 'next/head';
import VideoPlayer from '../components/VideoPlayer';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Học Vật Lí Online</title>
      </Head>
      <main className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Bài học: Dao động cơ</h1>
        <VideoPlayer url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        <Quiz />
      </main>
    </div>
  );
}
