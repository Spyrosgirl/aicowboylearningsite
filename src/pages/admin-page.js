import React from "react";
import { PageLayout } from "../components/page-layout";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();
  const navTo = (location) => {
    navigate(location");
  };
  return (
    <PageLayout>
      <div onClick={navTo('/adminCourses')}> Manage Course </div>
    </PageLayout>
  );
};
