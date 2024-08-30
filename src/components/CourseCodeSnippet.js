import React from "react";

export const CourseCodeSnippet = ({ title, desc, price, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={handleClick} className="code-snippet">
      <span className="code-snippet__title">{title}{price}</span>
      <div className="code-snippet__container">
        <div className="code-snippet__wrapper">
          <button className="code-snippet__body">{desc}</button>
        </div>
      </div>
    </div>
  );
};
