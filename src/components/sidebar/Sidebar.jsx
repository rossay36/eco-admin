import "./Sidebar.css";
import {
  MdLineStyle,
  MdOutlineTimeline,
  MdOutlineTrendingUp,
  MdPermIdentity,
  MdOutlineStorefront,
  MdOutlineAttachMoney,
  MdBarChart,
  MdMailOutline,
  MdOutlineDynamicFeed,
  MdChatBubbleOutline,
  MdOutlineReport,
} from "react-icons/md";
import { IoGitNetworkOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdOutlineTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdOutlineTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <MdPermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <MdOutlineAttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <MdBarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdMailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdOutlineDynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <IoGitNetworkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdOutlineTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdOutlineReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
