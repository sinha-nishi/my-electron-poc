import Img from "./Image";
import { FaUser } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

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
        <span className="meta-item">
          <FaUser size={14} style={{ marginRight: 4 }} />
          {user}
        </span>
        <span className="meta-item">2m ago</span>
      </div>
    </div>
  </div>
);

export default PostCard;
