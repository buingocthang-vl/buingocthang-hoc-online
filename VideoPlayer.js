
export default function VideoPlayer({ url }) {
  return (
    <div className="mb-6">
      <iframe
        width="100%"
        height="315"
        src={url}
        title="Video bài giảng"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
