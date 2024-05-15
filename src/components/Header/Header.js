import down_arrow from "../../assets/down_arrow.svg";
import purple_star from "../../assets/purple_star.svg";
import star from "../../assets/star.svg";
import PrimaryButton from "../PrimaryButton";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="oe-header">
      <div>
        <div className="oe-h-background">
          <img src={star} alt="star" className="oe-absolute oe-h-left-star" />
          <img src={star} alt="star" className="oe-absolute oe-h-right-star" />
          <img
            src={purple_star}
            alt="star"
            className="oe-absolute oe-h-right-bottom-star"
          />
          <div className="oe-absolute oe-h-circle oe-h-hollow-circle"></div>
          <div className="oe-absolute oe-h-circle oe-h-top-circle"></div>
          <div className="oe-absolute oe-h-circle oe-h-bottom-circle"></div>
        </div>
        <div className="oe-h-description">
          <div className="flex-center oe-h-d-branch">
            <div className="oe-h-d-home">Home</div>
            <div className="oe-h-d-circle"></div>
            <div>Pune Branch</div>
          </div>
          <div className="flex-center flex-column">
            <h1 className="oe-h-title oe-heading-1">
              KC Overseas Education <br />
              Pune
            </h1>
            <div className="oe-h-t-wrapper"></div>
          </div>
          <p className="oe-paragraph-16">
            We value your career aspirations, which is why we map your
            preferences with the best that our global universities have to
            offer. Thousands of our students are pursuing their programs and
            aspirations in eminent universities globally and we welcome you to
            pursue yours!
          </p>
          <div className="oe-h-d-branch-action flex-center flex-wrap">
            <PrimaryButton title="Enquire Now" />
            <div className="flex-center oe-h-branch-address">
              <div className="oe-down-arrow-wrapper">
                <img
                  className="oe-down-arrow"
                  src={down_arrow}
                  alt="down-arrow"
                />
              </div>
              <span>Branch Address</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
