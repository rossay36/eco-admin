import "./Topbar.css";
import {
  MdOutlineNotificationsNone,
  MdOutlineSettings,
  MdLanguage,
} from "react-icons/md";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SHOP ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdOutlineNotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdOutlineSettings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
