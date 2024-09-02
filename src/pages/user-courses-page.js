import React from "react";
import { PageLayout } from "../components/page-layout";
import { CourseCodeSnippet } from "../components/CourseCodeSnippet";
import Courses from "../components/courseDict";

export const UserCoursesPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Your Courses
        </h1>
        <div className="horizon">
          {Courses.map((course) =>
            course.owned ? (
              <CourseCodeSnippet
                key={course.courseID}
                title={course.title}
                desc={course.desc}
                price={course.price}
                link={course.link}
              />
            ) : null
          )}
        </div>
        <h2>More courses we think you would like</h2>
        <div className="horizon">
          {Courses.map((course) =>
            !course.owned ? (
              <CourseCodeSnippet
                key={course.courseID}
                title={course.title}
                desc={course.desc}
                price={course.price}
                link={course.link}
              />
            ) : null
          )}
        </div>
      </div>
    </PageLayout>
  );
};
