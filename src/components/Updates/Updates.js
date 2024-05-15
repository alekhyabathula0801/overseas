import star_union from "../../assets/star_union.svg";
import ButtonWithIcon from "../ButtonWithIcon";
import { OVERSEAS_UPDATES } from "./helper";
import "./Updates.scss";

export const Updates = () => {
  return (
    <div className="oe-updates main-content-x-padding">
      <h1 className="oe-heading-1">Latest KC Updates</h1>
      <div className="oe-u-content oe-hide-scrollbar">
        <div className="oe-uc-wrapper">
          <div>
            <h1 className="oe-heading-1">We’re Hiring!</h1>
            <div className="oe-heading-4 oe-uc-w-description">
              KC continues recruitments for its offices across India and Asia
              even during the unprecedented times of Covid.
            </div>
          </div>
          <button className="oe-secondary-button">Apply now</button>
        </div>
        {OVERSEAS_UPDATES.map((data, index) => (
          <div key={index} className="oe-uc-council flex-between flex-column">
            <div className="oe-ucc-branch flex-center flex-column">
              <img src={data.icon} alt="airc" />
              <div>{data.title}</div>
            </div>
            <img className="oe-ucc-star-union" src={star_union} alt="star" />
            <div className="oe-ucc-certification">
              <div className="oe-heading-4">{data.subtext}</div>
              <div className="oe-ucc-c-date">{data.date}</div>
            </div>
          </div>
        ))}
      </div>
      <ButtonWithIcon title="More News" className="flex-center" />
    </div>
  );
};

export default Updates;
