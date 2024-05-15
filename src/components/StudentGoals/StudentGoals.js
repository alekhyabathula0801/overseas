import ButtonWithIcon from "../ButtonWithIcon";
import { GOALS } from "./helper";
import "./StudentGoals.scss";

export const StudentGoals = () => {
  return (
    <div className="oe-student-goal">
      <h1 className="oe-heading-1">
        7 Easy Steps to Land in your Dream University
      </h1>
      <div className="oe-sg-wrapper">
        <div className="oe-sg-disable-right"></div>
        <div className="oe-sg-steps oe-hide-scrollbar">
          <div className="oe-sg-count-wrapper flex-center">
            {GOALS.map((data, index) => (
              <div key={index} className="oe-sg-cw-box flex-center">
                <div className="oe-sg-cw-separator oe-sg-cw-separator-left"></div>
                <div
                  className={`oe-sg-count ${
                    data.isDisabled && `oe-sgsw-s-number-disabled`
                  } flex-center`}
                >
                  {index + 1}
                </div>
                <div className="oe-sg-cw-separator oe-sg-cw-separator-right"></div>
              </div>
            ))}
          </div>
          <div className="oe-sg-steps-wrapper flex-center">
            {GOALS.map((data) => (
              <div key={data.id} className="oe-sgsw-s-content">
                <div className="oe-sgsw-sc-arrow-box"></div>
                <img src={data.icon} alt="counselling" />
                <div className="oe-sgsw-sc-title">{data.title}</div>
                <div>{data.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-center">
        <ButtonWithIcon
          title="Previous Step"
          className="flex-center oe-sg-previous-step"
        />
        <ButtonWithIcon title="Next Step" className="flex-center" />
      </div>
    </div>
  );
};

export default StudentGoals;
