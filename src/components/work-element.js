import React from "react";

export const WorkElement = ({ index, deleteWorkElem }) => {
  return (
    <div className="parent-lab-container">
      <div className="lab-input-container">
        <label htmlFor="workTitle" className="labLabel">
          Work Title:
        </label>
        <input type="text" id="workTitle" name="workTitle" />
      </div>
      <div className="lab-input-container">
        <label htmlFor="workLink" className="labLabel">
          Work Link:
        </label>
        <input type="text" id="workLink" name="workLink" />
      </div>
      <div className="del-lab-button" onClick={() => deleteWorkElem(index)}>
        X
      </div>
    </div>
  );
};
