import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { AdminPage } from "./pages/admin-page";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { UserCoursesPage } from "./pages/user-courses-page";
import { AdminCoursesPage } from "./pages/admin-courses-page";
import { CoursePage } from "./pages/course-page";
import { EditCoursePage } from "./pages/edit-course-page";
import { AddLabPage } from "./pages/add-lab-page";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<ProfilePage />}
        // element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="/courses" element={<UserCoursesPage />} />
      <Route
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route
        path="/admin"
        element={<AdminPage />}
        //element={<AuthenticationGuard component={AdminPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/editCourse" element={<EditCoursePage />} />
      <Route path="/addLab" element={<AddLabPage />} />
      <Route path="/adminCourses" element={<AdminCoursesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
