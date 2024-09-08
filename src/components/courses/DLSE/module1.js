import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../buttons/dropdown";
import { courses } from "../../courses_container";
import { LabElement } from "../../lab-element"; // Adjust the import path

export const Mod1 = ({ id, edit }) => {
  const savedCourse = courses.find((course) => course.courseID === id);
  const navigate = useNavigate();

  // State to store additional LabElements for each course
  const [labElements, setLabElements] = useState(
    savedCourse.labLink.map(() => [])
  );

  const handleNewLab = (idx) => {
    setLabElements((prevElements) => {
      const updatedElements = [...prevElements];
      updatedElements[idx] = [
        ...updatedElements[idx],
        <LabElement
          key={`new-${idx}-${updatedElements[idx].length}`}
          index={updatedElements[idx].length}
          deleteLabElem={() =>
            handleDeleteLab(idx, updatedElements[idx].length)
          }
        />,
      ];
      return updatedElements;
    });
  };

  const handleDeleteLab = (courseIdx, elemIdx) => {
    setLabElements((prevElements) => {
      const updatedElements = [...prevElements];
      updatedElements[courseIdx] = updatedElements[courseIdx].filter(
        (_, i) => i !== elemIdx
      );
      return updatedElements;
    });
  };

  const handleNewWork = () => {
    navigate("/addWork");
  };

  return (
    <>
      {savedCourse && savedCourse.labLink[0] !== "" && (
        <>
          <div className="module-title">
            <h2 className="inner-module-title">Labs</h2>
            {edit && (
              <div
                className="inner-module-button blueButton"
                onClick={() => handleNewLab()}
              >
                Add New Lab
              </div>
            )}
          </div>
          {savedCourse.title.map((_, idx) => (
            <Dropdown key={idx} title={savedCourse.title[idx]}>
              {savedCourse.labLink[idx].map((_, idx2) => (
                <React.Fragment key={idx2}>
                  <a
                    href={savedCourse.labLink[idx][idx2]}
                    target="_blank"
                    rel="noreferrer"
                    className="lab_links"
                  >
                    {savedCourse.labDesc[idx][idx2]}
                  </a>
                </React.Fragment>
              ))}

              {/* Render newly added LabElements */}
              {labElements[idx].map((labElem, newLabIdx) => (
                <React.Fragment key={`new-${idx}-${newLabIdx}`}>
                  {labElem}
                </React.Fragment>
              ))}

              {edit && (
                <div
                  className="inner-dropdown-button blueButton"
                  onClick={() => handleNewLab(idx)}
                >
                  Add New Link
                </div>
              )}
            </Dropdown>
          ))}
        </>
      )}
      {savedCourse && savedCourse.workLink[0] !== "" && (
        <>
          <div className="module-title">
            <h2 className="inner-module-title">Homeworks</h2>
            {edit && (
              <div
                className="inner-module-button blueButton"
                onClick={handleNewWork}
              >
                Add New Homework
              </div>
            )}
          </div>
          {savedCourse.title.map((_, idx) => (
            <Dropdown key={idx} title={savedCourse.title[idx]}>
              {savedCourse.workLink[idx].map((_, idx2) => (
                <a
                  href={savedCourse.workLink[idx][idx2]}
                  target="_blank"
                  rel="noreferrer"
                  className="lab_links"
                  key={idx2}
                >
                  {savedCourse.workDesc[idx][idx2]}
                </a>
              ))}
            </Dropdown>
          ))}
        </>
      )}
    </>
  );
};
