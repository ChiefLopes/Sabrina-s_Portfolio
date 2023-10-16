import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <section className=" h-screen w-full bg-red-300">
      {/* The Nav Bar Section */}
      <NavBar />

      {/* The Hero Section */}
      <div className="">
        {/* The text content */}
        <div>
          <div>
            <h1 className="text-3xl font-bold text-black-700 px-[100px] leading-10">
              Step into the Digital <br /> Spotlight with Lauren
            </h1>
          </div>
        </div>

        {/* The image section */}
        <div></div>
      </div>
    </section>
  );
}

export default Hero