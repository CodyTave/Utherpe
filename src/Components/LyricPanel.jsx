import { useState, useEffect, useRef } from "react";
import { Sahdowstyle } from "../assets/Constants";
import gsap from "gsap";
function LyricPanel(props) {
  let { type, Content, Access } = props;
  const lines = Content.split("\n");
  const [OptionMenu, setToggle] = useState(false);
  const edit = useRef(null);
  useEffect(() => {
    console.log("in");
    gsap.to(".animate", {
      opacity: 1,
      x: 0,
      ease: "expo",
    });

    return () => {
      console.log("out");

      gsap.to(".animate", {
        opacity: 0,
        x: -50,
      });
    };
  }, [OptionMenu]);
  return (
    <div className="panel ">
      <div className="flex gap-5 mt-14 ">
        <div
          className={`transition-all px-3 py-1 text-center text-white text-2xl
             bg-black border-white border-[1px] ml-[3px] ${Sahdowstyle()}`}
        >
          {type}
        </div>
        <div
          className={`w-10 h-10 my-auto rounded-full ${Sahdowstyle("circle")}`}
        ></div>
      </div>
      <div>
        <div
          className={`relative mt-5  md:w-3/5 transition-all 
             border-black border-st rounded-[7px]
             text-xl p-5 ${OptionMenu ? "" : Sahdowstyle()}`}
        >
          <div
            className={`${
              OptionMenu ? "opacity-60 sm:opacity-100 sm:blur-0 blur-[2px]" : ""
            }`}
          >
            {lines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          {Access ? (
            <div>
              <button
                onClick={() => {
                  setToggle(!OptionMenu);
                }}
                className="absolute top-0 right-2 hover:tracking-widest hover:transition-all transition-all"
              >
                {OptionMenu ? "#" : "..."}
              </button>
              <div
                className={`${
                  OptionMenu ? "absolute" : "hidden"
                } top-7 right-2 animate`}
              >
                <div
                  id="edit"
                  onClick={() => {
                    props.HandleEdit();
                    setToggle(!OptionMenu);
                  }}
                  className="text-white bg-black px-5 font-normal text-center  cursor-pointer mb-2 hover:tracking-widest hover:transition-all transition-all"
                >
                  Edit
                </div>
                <div
                  onClick={() => {
                    props.HandleDelete();
                    setToggle(!OptionMenu);
                  }}
                  className="text-white bg-black px-5 font-normal text-center cursor-pointer mb-2 hover:tracking-widest hover:transition-all transition-all"
                >
                  Delete
                </div>
                <div
                  onClick={() => {
                    props.HandleRepeat();
                    setToggle(!OptionMenu);
                  }}
                  className="text-white bg-black px-5 font-normal text-center cursor-pointer hover:tracking-widest hover:transition-all transition-all "
                >
                  Repeat
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default LyricPanel;
