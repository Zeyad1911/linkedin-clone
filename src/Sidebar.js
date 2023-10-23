import React from "react";
import "./styles/Sidebar.css";
import HeaderOption from "./HeaderOption";
import avatarImage from "./images/avatar.png";
const backGround =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={backGround} alt="sidebar cover" />
        <HeaderOption avatar={avatarImage} />
        <h2>Zeyad Mohamed</h2>
        <p>student at sadat academy</p>
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p>2.145</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p>2.145</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}
export default Sidebar;
