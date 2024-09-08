import React from "react";

export const LabElement = ({ index, deleteLabElem}) => {
  return (
    <div className="parent-lab-container">
      <div className="lab-input-container">
        <label htmlFor="labTitle" className="labLabel">
          Lab Title:
        </label>
        <input type="text" id="labTitle" name="labTitle" />
      </div>
      <div className="lab-input-container">
        <label htmlFor="labLink" className="labLabel">
          Lab Link:
        </label>
        <input type="text" id="labLink" name="labLink" />
      </div>
      <div className="del-lab-button" onClick={() => deleteLabElem(index)}>
        &#10006;
      </div>
    </div>
  );
};
