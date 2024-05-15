import "./PrimaryButton.scss";

export const PrimaryButton = ({ title = "", className = "" }) => {
  return <button className={`oe-primary-button ${className}`}>{title}</button>;
};

export default PrimaryButton;
