import React from "react";
import "./styles/HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <img className="headerOption__icon" src={avatar} alt="User Avatar" />
      )}
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderOption;
