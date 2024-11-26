import React from "react";

function Header() {
  return (
    <section className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">E-Library</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-[#669bbc] font-medium">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-[#669bbc] font-medium">Categories</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-[#669bbc] font-medium">My Account</a>
          </li>
        </ul>
        <button className="bg-[#326d8d] text-white px-4 py-2 rounded hover:bg-[#669bbc]">Login</button>
      </div>
    </section>
  );
}

export default Header;
