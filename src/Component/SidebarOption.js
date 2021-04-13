import React from "react";

// css
import "../Css/SidebarOption.css";

const SidebarOption = (props) => {
  return (
    <div
      className={`sidebar__option ${props.active ? "sidebar__active" : null}`}
    >
      <span>{props.icon}</span>
      <h1>{props.name}</h1>
    </div>
  );
};

export default SidebarOption;
