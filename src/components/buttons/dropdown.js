import React, { useState } from "react";

export const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown__button">
        {title}
        <div> X </div>
      </button>
      {isOpen && <div className="dropdown__content">{children}</div>}
    </div>
  );
};
