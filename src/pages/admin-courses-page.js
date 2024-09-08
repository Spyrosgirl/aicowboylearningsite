import React from "react";
import { PageLayout } from "../components/page-layout";
import { CourseCodeSnippet } from "../components/CourseCodeSnippet";
import { Courses } from "../components/courses_list";

export const AdminCoursesPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Courses
        </h1>
        <div className="content__sub">
          <h3 id="admin-subheader">Select a course to edit or add a new one</h3>
          <div className="new-course-button"> New Course </div>
        </div>
        <div className="horizon">
          {Courses.map((course) => (
            <CourseCodeSnippet
              key={course.courseID}
              title={course.title}
              desc={course.desc}
              price={course.price}
              link="/editCourse"
              ID={course.courseID}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
