import right_arrow from "../../assets/right_arrow.svg";
import "./ButtonWithIcon.scss";

export const ButtonWithIcon = ({
  title = "",
  className = "",
  icon = right_arrow,
}) => {
  return (
    <div className={`oe-button-with-icon ${className}`}>
      <div>{title}</div>
      <img src={icon} alt="right" />
    </div>
  );
};

export default ButtonWithIcon;
