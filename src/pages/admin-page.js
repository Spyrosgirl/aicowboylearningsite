import React from "react";
import { PageLayout } from "../components/page-layout";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();
  const navTo = (location) => {
    navigate(location);
  };
  return (
    <PageLayout>
      <div className="admin_header">
        <h1> Admin Page </h1>
      </div>
      <div className="admin_buttons_container">
        <div className="admin_button" onClick={() => navTo("/adminCourses")}>
          Manage Course
        </div>
      </div>
    </PageLayout>
  );
};
