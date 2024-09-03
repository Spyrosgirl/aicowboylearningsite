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
            {savedCourse.link[idx].map((_, idx2) => (
              <a
                href={savedCourse.link[idx][idx2]}
                target="_blank"
                rel="noreferrer"
                className="lab_links"
                key={idx2}
              >
                {savedCourse.desc[idx][idx2]}
              </a>
            ))}
          </Dropdown>
        ))}
      <h2>Homeworks</h2>
      <Dropdown title="1.2 Primer Python">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.3 Deep Learning Networks">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.4 Primer PFT Jax">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.5 Training and Optimization">
        <p>Test</p>
      </Dropdown>
      <Dropdown title="1.6 Neural Network Architecture">
        <p>Test</p>
      </Dropdown>
    </>
  );
};
