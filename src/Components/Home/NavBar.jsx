import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between pt-6">
      <div>
        <h1 className="text-3xl text-blue-400 px-[100px]">LAJ</h1>
      </div>
      <nav>
        <ul className="flex justify-between space-x-5  px-[150px]">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>How it works</li>
          <li>Reviews</li>
          <li>Portfolio</li>
          <li>Hire me</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
