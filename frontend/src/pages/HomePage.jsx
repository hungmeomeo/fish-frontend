import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";


const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div>
      <h1>Welcome to HOME PAGE!</h1>
      <p>Thanks for visiting. Please take a look around.</p>
      {/* Include the LogoutButton component */}
      <LogoutButton />
    </div>
  );
};

export default HomePage;
