import React from "react";
import { WAM } from "../assets";

function About() {
  return (
    <>
      <div className="bg-gold-1 border-black border-st">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[70%] my-28  mx-auto items-center">
          <div className="my-auto sm:col-span-2">
            <h1 className="xs:text-9xl text-7xl ">
              ABOUT <span className="text-white selection:text-black">US</span>
            </h1>
            <div className="text-white text-2xl font-bold md:w-[70%] mt-3 mb-3 selection:bg-white selection:text-gold-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              atque ad corporis maxime! Asperiores aliquam suscipit sed quidem
              dolor voluptas voluptate delectus! Excepturi tenetur delectus in
              natus eveniet assumenda! Odio.
            </div>
          </div>
          <div className="grid mt-10 md:mt-0">
            <img className="w-3/4 mx-auto" src={WAM} />
            <div className="cursor-pointer mx-auto text-2xl px-8 py-2  bg-white  shadow-neo2 hover:shadow-neo transition-all hover:transition-all ">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
