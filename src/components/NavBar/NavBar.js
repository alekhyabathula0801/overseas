import hamburger_menu from "../../assets/hamburger_menu.svg";
import logo from "../../assets/logo.svg";
import { NAV_ACTIONS } from "./helper";

export const NavBar = () => {
  return (
    <nav className="flex-between">
      <img className="oe-h-logo" src={logo} alt="logo" />
      <div className="flex-center oe-h-nav-right-content">
        {NAV_ACTIONS.map((data) => (
          <div
            key={data.id}
            className={`oe-h-nrc-action-text ${data.className}`}
          >
            {data.text}
          </div>
        ))}
        <img className="oe-h-hamburger-menu" src={hamburger_menu} alt="menu" />
      </div>
    </nav>
  );
};

export default NavBar;
