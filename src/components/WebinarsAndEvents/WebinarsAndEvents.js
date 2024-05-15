import new_zealand from "../../assets/new_zealand.png";
import uk from "../../assets/uk.png";
import usa from "../../assets/usa.png";
import ButtonWithIcon from "../ButtonWithIcon";
import "./WebinarsAndEvents.scss";

export const WebinarsAndEvents = () => {
  return (
    <div className="oe-events main-content-x-padding">
      <h1 className="oe-heading-1">Webinars & Events</h1>
      <div className="oe-e-wrapper oe-hide-scrollbar flex-center">
        <div className="oe-ew-content flex-start oe-ew-left">
          <img src={usa} alt="usa" />
          <div className="oe-ew-c-info">
            <div className="oe-ew-ci-date">Mar 19 · 05:00 PM to 07:30 PM</div>
            <div className="oe-heading-4">USA Vertual Addmission Day</div>
            <div className="oe-we-ci-description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <ButtonWithIcon
              title="Register Now"
              className="flex-center oe-ew-ci-register"
            />
          </div>
        </div>
        <div className="oe-ew-right flex-center flex-column">
          <div className="oe-ew-content flex-start">
            <img src={new_zealand} alt="usa" />
            <div className="oe-ew-c-info">
              <div className="oe-ew-ci-date">
                May 18 - May 21 · 04:30 PM to 06:30 PM
              </div>
              <div className="oe-heading-4">
                New Zealand Virtual Admissions Week
              </div>
              <div className="oe-we-ci-description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia...
              </div>
              <ButtonWithIcon
                title="Register Now"
                className="flex-center oe-ew-ci-register"
              />
            </div>
          </div>
          <div className="oe-ew-content flex-start">
            <img src={uk} alt="usa" />
            <div className="oe-ew-c-info">
              <div className="oe-ew-ci-date">
                May 24 - May 28 · 04:00 PM to 06:00 PM
              </div>
              <div className="oe-heading-4">UK Virtual Admissions Week</div>
              <div className="oe-we-ci-description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia...
              </div>
              <ButtonWithIcon
                title="Register Now"
                className="flex-center oe-ew-ci-register"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonWithIcon title="See More" className="flex-center" />
    </div>
  );
};

export default WebinarsAndEvents;
