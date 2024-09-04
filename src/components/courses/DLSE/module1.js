import React from "react";
import { Dropdown } from "../../buttons/dropdown";
import { courses } from "../../courses_container";

export const Mod1 = ({ id }) => {
  const savedCourse = courses.find((course) => course.courseID === id);
  return (
    <>
      <h2>Labs</h2>
      {savedCourse &&
        savedCourse.title.map((_, idx) => (
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
      <h2>Homeworks</h2>
       {savedCourse &&
        savedCourse.workLink[0] != "" &&
        savedCourse.title.map((_, idx) => (
          <Dropdown key={idx} title={savedCourse.title[idx]}>
            {savedCourse.labLink[idx].map((_, idx2) => (
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
  );
};
