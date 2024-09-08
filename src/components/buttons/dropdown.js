import React, { useState } from "react";

export const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const deleteDropdown = () => {
    console.log("Delete");
  }

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown__button">
        {title}
        <div onClick={deleteDropdown}> X </div>
      </button>
      {isOpen && <div className="dropdown__content">{children}</div>}
    </div>
  );
};
