import React, { useState } from "react";
import { PageLayout } from "../components/page-layout";
import { WorkElement } from "../components/work-element";
//import { Courses } from "../components/courses_list";
export const AddWorkPage = () => {
  const [workElements, setWorkElem] = useState([{ id: Date.now() }]);

  const addWorkElem = () => {
    setWorkElem((prevElem) => [...prevElem, { id: Date.now() }]);
  };

  const deleteWorkElem = (index) => {
    setWorkElem((prevElem) => prevElem.filter((elem) => elem.id !== index));
  };
  return (
    <PageLayout>
      <div className="new-lab-container">
        <div className="lab-header">
          <div className="lab-input-header">
            <label htmlFor="workName">Work Group Name</label>
            <input type="text" id="workName" name="workName" />
          </div>
          <div className="add-lab-button blueButton"> Add Work Group </div>
        </div>
        {workElements.map((elem) => (
          <WorkElement
            key={elem.id}
            index={elem.id}
            deleteWorkElem={deleteWorkElem}
          />
        ))}
        <div className="add-lab-elem-button blueButton" onClick={addWorkElem}>
          Add Another Homework
        </div>
      </div>
    </PageLayout>
  );
};
