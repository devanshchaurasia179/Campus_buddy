//AIzaSyABnqVU4GRHGTVUppFOisO-62AgS4KANu0

import React from "react";
import Navbar from "./components/Navbar";
import FloatingParticles from "./components/FloatingParticles";
import GeminiSearch from "./components/GeminiSearch"; // Import the new component
import StudentList from "./components/StudentList"; // Assuming this exists

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-['Inter']">
      <Navbar />
      <FloatingParticles>
        <div className="relative flex items-center justify-center min-h-[calc(100vh-64px)] bg-transparent z-10 w-full">
          <div className="text-white text-center p-6 w-full">
            <h1 className="text-[60px] font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Hello Sritiz!</h1>
            <h1 className="text-[25px] font-bold mb-6">What can I do for you?</h1>
            <div className="w-full flex justify-center">
              {/* Replace the old SearchBar with the new GeminiSearch component */}
              <GeminiSearch />
            </div>
          </div>
        </div>
      </FloatingParticles>
    </div>
  );
};

export default App;