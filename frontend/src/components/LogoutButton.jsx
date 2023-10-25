import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a POST request to a logout API endpoint
      const response = await fetch(
        "https://fish-demo.onrender.com/auth/logout",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        // The logout was successful; remove the token from storage
        sessionStorage.removeItem("authToken");
        // console.log("Logout Response:", response);
        // Redirect to the home page after successful logout
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-3 py-1 rounded-md"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
