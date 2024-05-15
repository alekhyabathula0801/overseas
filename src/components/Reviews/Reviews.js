import { useRef } from "react";
import down_arrow from "../../assets/down_arrow.svg";
import Comments from "../Comments";
import { USER_REVIEWS } from "./helper";
import "./Reviews.scss";

export const Reviews = () => {
  const reviewsRef = useRef();

  const onLeftClick = () => {
    reviewsRef.current.scrollLeft -= reviewsRef.current.offsetWidth + 25;
  };

  const onRightClick = () => {
    reviewsRef.current.scrollLeft += reviewsRef.current.offsetWidth + 25;
  };

  return (
    <div className="oe-reviews">
      <h1 className="oe-heading-1">Our students love us</h1>
      <div className="oe-r-navigator-wrapper main-content-x-padding">
        <div className="oe-r-navigator flex-between">
          <div
            onClick={onLeftClick}
            className="oe-down-arrow-wrapper oe-r-n-left"
          >
            <img className="oe-down-arrow" src={down_arrow} alt="down-arrow" />
          </div>
          <div
            onClick={onRightClick}
            className="oe-down-arrow-wrapper oe-r-n-right"
          >
            <img className="oe-down-arrow" src={down_arrow} alt="down-arrow" />
          </div>
        </div>
        <div ref={reviewsRef} className="oe-r-comments oe-hide-scrollbar">
          {USER_REVIEWS.map((data, index) => {
            const className = data.isActive
              ? "oe-r-comments-wrapper-active"
              : "";
            return <Comments key={index} {...data} className={className} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
