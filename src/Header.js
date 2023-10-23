import React from "react";
import linkedinImage from "../src/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import "./styles/Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import jobIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatarImage from "./images/avatar.png";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedinImage} alt="linkedin icon" />
        <div className="header__search">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={PeopleAltIcon} />
        <HeaderOption title="Jobs" Icon={jobIcon} />
        <HeaderOption title="Messaging" Icon={MessageIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar={avatarImage} />
      </div>
    </div>
  );
}

export default Header;
