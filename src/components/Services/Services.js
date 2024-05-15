import global_ambitions from "../../assets/global_ambitions.svg";
import golden_star from "../../assets/golden_star.svg";
import PrimaryButton from "../PrimaryButton";
import { AMBITION_OPTIONS, SERVICE_OPTIONS } from "./helper";
import "./Services.scss";

export const Services = () => {
  return (
    <div className="oe-services main-content-x-padding flex-center flex-column">
      <h1 className="oe-heading-1">Services we provide</h1>
      <div className="flex-center flex-wrap oe-s-content">
        {SERVICE_OPTIONS.map((data) => (
          <div key={data.id} className="flex-center oe-sc-card">
            <img src={data.icon} alt={data.id} />
            <span>{data.text}</span>
          </div>
        ))}
      </div>
      <PrimaryButton title="Enquire Now" />
      <div className="oe-s-global-ambitions flex-center flex-wrap">
        <img
          className="oe-sga-left-icon"
          src={global_ambitions}
          alt="global ambitiom"
        />
        <div>
          <div className="oe-heading-3">Realize your global ambitions with us</div>
          <div className="oe-paragraph-16 oe-sga-subtitle">
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </div>
          <div className="flex-start flex-column oe-sga-content-wrapper">
            {AMBITION_OPTIONS.map((data) => (
              <div key={data.id} className="oe-sga-content flex-start">
                <div className="flex-center">
                  <img src={golden_star} alt="golden_star" />
                </div>
                <span className="oe-paragraph-16">{data.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
