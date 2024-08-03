import React from "react";
import "./Sidebar.scss";
import { CONSTANT } from "../../constant";

const Sidebar = ({ activeOption, setActiveOption }) => {
  const handleOptionClick = (option) => {
    setActiveOption(option.key);
  };

  return (
    <div className="sidebar">
      {CONSTANT.SIDEBAR_OPTIONS.map((option, index) => (
        <div
          key={index}
          className={`sidebarOption ${
            activeOption === option.key ? "active" : ""
          }`}
          onClick={() => handleOptionClick(option)}
        >
          <div dangerouslySetInnerHTML={{ __html: option.icon }}></div>
          <p>{option.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
