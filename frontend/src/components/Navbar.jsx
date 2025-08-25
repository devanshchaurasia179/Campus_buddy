import React,{useEffect,useState} from "react";
import Dropdown from "./Dropdown";
import ProfileDrop from "./ProfileDrop";
import Sidebar from "./Sidebar";
import Logo from "../assets/logo.jpg"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen]=useState(false);
  return (
    
    <nav className="bg-gray-50 w-full shadow-md p-1 z-100">
      <div className="container mx-auto flex justify-between items-center z-100">
        <button
        onClick={() => setIsSidebarOpen(true)}
        className="p-3"
      >
        <img src={Logo} alt="" className="h-10 w-auto max-w-full rounded-full"/>
      </button>

    
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex justify-center ">
    
        
        <Dropdown/>
        <ProfileDrop/>
        </div>
      </div>
    </nav>
   
  );
};

export default Navbar;

