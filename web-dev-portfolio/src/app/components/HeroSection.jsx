"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          {/* This is responsible for the formatting of the Header */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> 
          {/* This is responsible for turning the Heading text from color A to color B */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m {" "}
          </span>
          <br></br>
          <TypeAnimation
          sequence={[
            "Conor",
            1000,
            "a Sec-Engineer",
            1000,
            "a SOC Analyst T2",
            1000,
            "a Student",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          /> 
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-3 lg:text-xl"> 
          University of Denver 2024 Graduate, B.S. in Computer Science.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"> 
            Download Resume
            </button>
            {/* <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3">
               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
            </button> */}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="relative w-72 h-72 lg:w-128 lg:h-128 rounded-full bg-[#F9F6EE] mt-5 lg:mt-10 overflow-hidden spinning-border">
        <Image 
              src="/images/main-removebg-preview.png"
              alt="headshot"
              layout="fill"
              objectFit="cover"
              objectPosition="center 25%" // Adjust this value to position the image lower
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;