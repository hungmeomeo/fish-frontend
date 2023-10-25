import React from 'react';
import { useNavigate } from "react-router-dom";

function LogoutButton() {

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Send a POST request to the logout API endpoint with the correct Authorization header
      const response = await fetch('https://fish-demo.onrender.com/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Ensure 'authToken' is correctly stored in localStorage
          'Content-Type': 'application/json', // You can add this header as well
        },
      });

      if (response.ok) {
        // The logout was successful; clear the token and redirect to the login page
        localStorage.removeItem('authToken');
        console.log('Logout Response:', response);
      } else {
        // Handle logout failure
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded-md">
      Logout
    </button>
  );
}

export default LogoutButton;
