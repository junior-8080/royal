interface YouTubeEmbedProps {
  videoId: string;
}

const YoutbeFrame: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutbeFrame;
