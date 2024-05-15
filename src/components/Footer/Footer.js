import down_arrow from "../../assets/down_arrow.svg";
import union from "../../assets/union.svg";
import PrimaryButton from "../PrimaryButton";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <img className="oe-footer-union" src={union} alt="union" />
      <h1 className="oe-heading-1">Stay updated with KC Overseas</h1>
      <div className="flex-center oe-footer-contact-us">
        <input placeholder="Email ID" />
        <div className="oe-f-input">
          <input placeholder="I’m Interested in" />
          <img className="oe-f-input-icon" src={down_arrow} alt="down arrow" />
        </div>
        <PrimaryButton title="Suscribe Now" className="oe-f-button" />
      </div>
    </footer>
  );
};

export default Footer;
