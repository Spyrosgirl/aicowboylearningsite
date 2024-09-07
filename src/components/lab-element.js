import React from "react";

export const LabElement = () => {
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
    </div>
  );
};
