import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-lg">
        
        <h1 className="text-4xl font-bold mb-4">
          Welcome to blog hub 
        </h1>

        <p className="text-gray-600 mb-6">
          Create, publish, and share your thoughts with the world.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
