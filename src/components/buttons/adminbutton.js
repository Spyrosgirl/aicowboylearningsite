import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin");
  };

  return (
    <div className="profile__button" onClick={handleClick}>
      Go to Admin Page
    </div>
  );
};
