import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
  
      <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between items-center">
        Campus Buddy
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-lg"
        >
          ✖
        </button>
      </div>

  
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            Recent Updates
          </h2>
          <ul className="space-y-2">
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
              
            </li>
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
             
            </li>
          </ul>
        </div>

      
        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            Past Chats
          </h2>
          <ul className="space-y-2">
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
            
            </li>
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
          
            </li>
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
             
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
