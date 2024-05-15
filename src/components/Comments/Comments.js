import comment from "../../assets/comment.svg";
import './Comments.scss';

export const Comments = ({
  description = "",
  name = "",
  location = "",
  className = "",
}) => {
  return (
    <div className={`oe-r-comments-wrapper ${className}`}>
      <div>
        <img src={comment} alt="comment" />
        <div className="oe-paragraph-16">{description}</div>
      </div>
      <div>
        <div className="oe-r-cw-name">{name}</div>
        <div className="oe-r-cw-location">{location}</div>
      </div>
    </div>
  );
};

export default Comments;
