import React from "react";

export const CourseCodeSnippet = ({ title, desc, price, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={handleClick} className="code-snippet">
      <div className="code-snippet__title">
        <span>{title}</span>
        <span>{price}</span>
      </div>
      <div className="code-snippet__container">
        <div className="code-snippet__wrapper">
          <button className="code-snippet__body">{desc}</button>
        </div>
      </div>
    </div>
  );
};
