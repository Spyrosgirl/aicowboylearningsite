import React from "react";
import { PageLayout } from "../components/page-layout";
import { CourseCodeSnippet } from "../components/CourseCodeSnippet";
import { Courses } from "../components/courses_list";

export const AdminPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Your Courses
        </h1>
        <div className="horizon">
          {Courses.map((course) =>
            (
              <CourseCodeSnippet
                key={course.courseID}
                title={course.title}
                desc={course.desc}
                price={course.price}
                link={course.link}
                ID={course.courseID}
              />
            )
          )}
        </div>
      </div>
    </PageLayout>
  );
};
