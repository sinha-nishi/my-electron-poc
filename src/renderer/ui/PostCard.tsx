import Img from "./Image";

interface PostCardProps {
    title: string;
    user: string;
    src: any;
    span?: number;

}

const PostCard = ({ title, user, src, span = 4 }: PostCardProps) => (
  <div className={`post card span-${span}`}>
    <Img src={src} alt={title} />
    <div className="overlay"></div>
    <div className="label">
      <div className="title">{title}</div>
      <div className="meta">
        <span>👤 {user}</span>
        <span>●</span>
        <span>2m ago</span>
      </div>
    </div>
  </div>
);

export default PostCard
