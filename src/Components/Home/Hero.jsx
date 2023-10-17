import React from "react";
import NavBar from "./NavBar";
import woman from "../../Images/woman.png";

const Hero = () => {
  return (
    <section className=" w-full bg-slate-200">
      {/* The Nav Bar Section */}
      <NavBar />

      {/* The Hero Section */}
      <div className=" my-[120px] flex justify-between">
        {/* The text content */}
        <div>
          <div>
            <h1 className="text-3xl font-bold text-black-700 pl-[100px] leading-10">
              Step into the Digital <br /> Spotlight with Lauren
            </h1>
            <p className="text-black-700 leading-6 px-[100px] mt-7">
              Are you ready to elevate your digital presence and marketing
              strategy? Well, you're <br /> in the right place. Meet Lauren
              Anderson James, your digital guru, strategist, and <br /> campaign
              mastermind. Let's turn your online dreams into reality.
            </p>

            {/* The buttons for navigation */}
            <div className="flex pl-[100px] py-3">
              <button className="bg-blue-400 rounded-md text-white px-4 py-2 rounded-md h-10 w-40 text-center text-sm">
                See all my services
              </button>
              <button className="text-blue-400 px-4 ml-4 rounded-md border-2 border-blue-400 h-10 w-40 text-center text-sm">
                See my portfolio
              </button>
            </div>
          </div>
        </div>

        {/* The image section */}
        <div className="flex flex-row">
          <img
            src={woman}
            alt="woman with a blonde hair"
            className="h-[330px] "
          />
        </div>
      </div>
      <div className="bg-slate-800 h-[120px] position relative bottom-[120px] flex justify-around px-[17rem] py-7 text-white text-2xl text-center ">
        <div className="">
          <p className=" text-4xl font-bold mr-[67px]">12+</p>
          <p className="text-sm">Years of experience</p>
        </div>
        <div className="">
          <p className=" text-4xl font-bold mr-14">44+</p>
          <p className="text-sm">Completed projects</p>
        </div>
        <div className="">
          <p className=" text-4xl font-bold mr-5">200+</p>
          <p className="text-sm">Satisfied clients</p>
        </div>
        <div className="">
          <p className=" text-4xl font-bold mr-[95px]">50+</p>
          <p className="text-sm">Awards and nominations</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
