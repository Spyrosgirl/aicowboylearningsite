import React from "react";
import { PageLayout } from "../components/page-layout";
import { CourseCodeSnippet } from "../components/CourseCodeSnippet";

const courses = [
  {
    courseID: 1,
    title: "deep learning for science and engineering",
    price: "$2.00",
    owned: false,
  },
  {
    courseID: 2,
    title: "nvidia dli data science",
    price: "$5.00",
    owned: true,
  },
  {
    courseID: 3,
    title: "nvidia dli deep",
    price: "$3.00",
    owned: false,
  },
];

export const PublicPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Courses
        </h1>
        <div className="content__body">
          {courses.map((course) => (
            <CourseCodeSnippet 
              key={course.courseID}
              title={course.title}
              desc={course.price}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
