import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Callback = () => 
  {
  const { isAuthenticated, error, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => 
  {
    if (error) {
      console.error("Authentication error:", error);
      return;
    }

    if (isAuthenticated) 
    {
      navigate("/");
    } 
    else 
    {
      loginWithRedirect();
    }
  }, [isAuthenticated, error, loginWithRedirect, navigate]);

  return (
    <div>
      <h2>Processing authentication...</h2>
      {/* You can add a loading spinner or message here */}
    </div>
  );
};

export default Callback;
