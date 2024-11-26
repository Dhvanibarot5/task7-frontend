import React from "react";

function HeroSection() {
  return (
    <section className="bg-[#003049] text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Library</h1>
        <p className="text-lg mb-6">Discover a wide range of books and resources at your fingertips.</p>
        <button className="bg-[#326d8d] text-white px-6 py-3 rounded font-bold hover:bg-[#669bbc]">Explore Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
