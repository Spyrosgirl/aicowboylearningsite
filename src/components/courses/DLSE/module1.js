import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../buttons/dropdown";
import { courses } from "../../courses_container";

export const Mod1 = ({ id, edit }) => {
  const savedCourse = courses.find((course) => course.courseID === id);
  const navigate = useNavigate();
  const handleNewLab = (headerBool) => {
    navigate("/addLab", { state: { hideHeader: headerBool } });
  };

  const handleNewWork = () => {
    navigate("/addWork");
  };

  const deleteLink = () => {
    console.log("Delete");
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
                onClick={() => handleNewLab(false)}
              >
                Add New Lab
              </div>
            )}
          </div>
          {savedCourse.title.map((_, idx) => (
            <Dropdown key={idx} title={savedCourse.title[idx]} edit={edit}>
              {savedCourse.labLink[idx].map((_, idx2) => (
                <React.Fragment key={idx2}>
                  <div className="linkLine">
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
                      <div className="deleteLink" onClick={deleteLink}>
                        X
                      </div>
                    )}
                  </div>
                  {edit && (
                    <div
                      className="inner-dropdown-button blueButton"
                      onClick={() => handleNewLab(true)}
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
            <Dropdown key={idx} title={savedCourse.title[idx]} edit={edit}>
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
