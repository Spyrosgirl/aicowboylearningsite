import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../buttons/dropdown";
import { courses } from "../../courses_container";

export const Mod1 = ({ id, edit }) => {
  const savedCourse = courses.find((course) => course.courseID === id);
  const navigate = useNavigate();
  const handleNewLab = () => {
    navigate("/addLab");
  };
  const handleNewWork = () => {
    navigate("/addLab");
  };
  return (
    <>
      {savedCourse && savedCourse.labLink[0] != "" && (
        <>
          <div className="module-title">
            <h2 className="inner-module-title">Labs</h2>
            {edit && (
              <div
                className="inner-module-button blueButton"
                onClick={handleNewLab}
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
                    key={idx2}
                  >
                    {savedCourse.labDesc[idx][idx2]}
                  </a>
                  {edit && (
                    <div
                      className="inner-dropdown-button blueButton"
                      onClick={handleNewLab}
                    >
                      Add New Link
                    </div>
                  )}
                </React.Fragment>
              ))}
            </Dropdown>
          ))}
        </>
      )}
      {savedCourse && savedCourse.workLink[0] != "" && (
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
