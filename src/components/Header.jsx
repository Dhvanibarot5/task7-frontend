import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const scrollToCategories = (e) => {
    e.preventDefault();
    const categoriesSection = document.querySelector("#categories-section");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-[#326d8d]">E-Library</h1>

        <div className="flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-[#669bbc] font-medium">
          Home
        </Link>
        <a href="#categories-section" onClick={scrollToCategories} className="text-gray-700 hover:text-[#669bbc] font-medium">
          Categories
        </a>
        </div>
        <Link to="/my-account" className="bg-[#326d8d] text-white px-4 py-2 rounded hover:bg-[#669bbc] transition-colors">
          My Account
        </Link>
      </div>
    </section>
  );
}

export default Header;
