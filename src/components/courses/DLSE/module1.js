import React from "react";
import { Dropdown } from "../../buttons/dropdown";
import { courses } from "../../courses_container";

export const Mod1 = ({ id, edit }) => {
  const savedCourse = courses.find((course) => course.courseID === id);
  return (
    <>
      {savedCourse && savedCourse.labLink[0] != "" && (
        <>
          <div> Add New Lab </div>
          <h2>Labs</h2>
          {savedCourse.title.map((_, idx) => (
            <Dropdown key={idx} title={savedCourse.title[idx]}>
              {savedCourse.labLink[idx].map((_, idx2) => (
                <a
                  href={savedCourse.labLink[idx][idx2]}
                  target="_blank"
                  rel="noreferrer"
                  className="lab_links"
                  key={idx2}
                >
                  {savedCourse.labDesc[idx][idx2]}
                </a>
              ))}
            </Dropdown>
          ))}
        </>
      )}
      {savedCourse && savedCourse.workLink[0] != "" && (
        <>
          <div> Add New Homework </div>
          <h2>Homeworks</h2>
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
