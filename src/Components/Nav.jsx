import React from "react";
import { logo, logoW, search, SearchW } from "../assets";
import { navLinks } from "../assets/Constants";
import { useState } from "react";
function Nav() {
  const [Hovered, setHover] = useState(null);
  const [toggle, setTogg] = useState(false);
  const [LookUp, SetLookup] = useState(false);
  return (
    <>
      <div className="md:flex hidden items-center my-5">
        <img className="md:w-1/6 w-[40%] mx-auto cursor-pointer " src={logo} />
      </div>
      <div className="md:flex hidden h-16 border-st border-black content-between text-2xl font-black">
        <div className="mr-auto my-auto">
          <ul className="flex pl-6 gap-6">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setHover(index);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                className={`cursor-pointer transition-all
                ${Hovered === index ? "tracking-wider " : ""} 
                ${
                  Hovered !== index && Hovered !== null
                    ? "opacity-10 scale-90"
                    : "opacity-100"
                }`}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-auto">
          <ul className="flex h-full ">
            <li>
              <img
                onClick={() => {
                  SetLookup(!LookUp);
                }}
                className="w-[35px] pt-3 pb-2 mr-2 transition-all hover:transition-all hover:scale-105 cursor-pointer"
                src={search}
              />
            </li>
            <li>
              <div className="cursor-pointer pt-3 px-10 bg-black h-full text-white transition-all hover:tracking-wide hover:transition-all hover:text-black hover:bg-white ">
                Log In
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={` w-full transition-all md:flex hidden
        ${LookUp ? " border-b-st border-black border-x-st " : ""}
        `}
      >
        <input
          type="text"
          placeholder={` ${
            LookUp ? "LookUp By Song Name,Lyric,Artist..." : ""
          }`}
          className={` ${
            LookUp ? " h-14 " : "h-0"
          } transition-all my-auto mx-auto w-1/2 outline-none text-2xl text-center invalid:no-underline	`}
        />
      </div>
      <div className="md:hidden">
        <div
          className={`absolute ${
            toggle ? "bg-black" : "bg-white"
          }  w-screen min-w-[320px] h-[100vh] top-0 z-[-1] transition-all`}
        />
        <div className="flex items-center my-5">
          <img
            className="w-1/2 mx-auto cursor-pointer transition-all "
            src={toggle ? logoW : logo}
          />
        </div>
        <div className="grid grid-cols-2 md:hidden items-center">
          <div className="mx-auto pl-10">
            <svg
              className="cursor-pointer"
              onClick={() => {
                setTogg(!toggle);
              }}
              width="51"
              height="47"
              viewBox="0 0 51 47"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!toggle ? (
                <>
                  <rect width="51" height="9" fill="black" />
                  <rect y="19" width="51" height="9" fill="black" />
                  <rect y="38" width="51" height="9" fill="black" />
                </>
              ) : (
                <>
                  <rect
                    x="0.286865"
                    y="36.0625"
                    width="51"
                    height="9"
                    transform="rotate(-45 0.286865 36.0625)"
                    fill="#FAFAFA"
                  />
                  <rect
                    x="7.36401"
                    width="51"
                    height="9"
                    transform="rotate(45 7.36401 0)"
                    fill="#FAFAFA"
                  />
                </>
              )}
            </svg>
          </div>
          <div className="mx-auto pr-10">
            <img
              onClick={() => {
                SetLookup(!LookUp);
              }}
              className=" w-12 pt-3 pb-2 transition-all hover:transition-all hover:scale-105 cursor-pointer"
              src={toggle ? SearchW : search}
            />
          </div>
          <div
            className={` w-screen transition-all flex md:hidden mt-5
        ${LookUp ? " border-black border-st " : ""}
        `}
          >
            <input
              type="text"
              placeholder={` ${
                LookUp ? "LookUp By Song Name,Lyric,Artist..." : ""
              }`}
              className={` ${
                LookUp ? " h-14 " : "h-0"
              } transition-all my-auto mx-auto w-full outline-none text-2xl text-center invalid:no-underline	`}
            />
          </div>
        </div>
        {toggle ? (
          <div className="flex text-center mt-16 ">
            <div className="mx-auto">
              <ul className=" text-2xl font-black text-white ">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setHover(index);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                    className={`cursor-pointer togg transition-all mb-14
                ${Hovered === index ? "tracking-widest " : ""} 
                ${
                  Hovered !== index && Hovered !== null
                    ? "opacity-10 scale-90"
                    : "opacity-100"
                }`}
                  >
                    {nav.title}
                  </li>
                ))}
                <li
                  onMouseEnter={() => {
                    setHover(4);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                  className="cursor-pointer transition-all hover:tracking-wide hover:transition-all mb-20   "
                >
                  Log In
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Nav;
