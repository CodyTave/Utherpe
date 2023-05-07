import { useRef, useState } from "react";
import { Sahdowstyle } from "../assets/Constants";
import { Tools } from "../assets/Constants";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import LyricPanel from "./LyricPanel";
function LyricEditor() {
  const [isActive, setActive] = useState(0);
  const [Input, setInput] = useState("");
  const [Height, setHeight] = useState(200);
  const [Lyrics, setLyrics] = useState([]);
  const [editState, setEdit] = useState([false, -1]);
  const [Warning, Warn] = useState({ state: false, context: "" });
  const lyricInput = useRef(null);
  gsap.registerPlugin(ScrollToPlugin);

  function AddedAnimation(target) {
    const tl = gsap.timeline();
    tl.set(target, { opacity: 0, x: 50, y: 0 });
    tl.to(target, { delay: -0.5, display: "inline" });
    tl.to(target, { opacity: 1, x: 0 });
    tl.to(target, { delay: 0.7, opacity: 0, y: -30 });
    tl.to(target, { display: "hidden" });
  }
  function AddLyric() {
    if (Input !== "") {
      let LyricPanel = { type: Tools[isActive].title, Content: Input };
      let TempLyrics = [...Lyrics];
      editState[0]
        ? TempLyrics.splice(editState[1], 0, LyricPanel)
        : TempLyrics.push(LyricPanel);
      setLyrics(TempLyrics);
      lyricInput.current.value = "";
      setInput("");
      AddedAnimation(".Notif");
      setEdit([false, -1]);
      Warn({
        state: false,
        context: "",
      });
    }
  }
  function Delete(index) {
    let newArr = [...Lyrics];
    newArr.splice(index, 1);
    setLyrics(newArr);
  }
  function Repeat(index) {
    let LyricPanel = {
      type: Lyrics[index].type,
      Content: Lyrics[index].Content,
    };
    let TempLyrics = [...Lyrics];
    TempLyrics.push(LyricPanel);
    setLyrics(TempLyrics);
  }
  function Edit(index) {
    if (!editState[0]) {
      let panel = Lyrics[index];
      lyricInput.current.value = panel.Content;
      setInput(panel.Content);
      setActive(Tools.findIndex((obj) => obj.title === panel.type));
      Delete(index);
      setEdit([true, index]);
      gsap.to(window, {
        scrollTo: "#Top",
        offset: 100,
      });
      lyricInput.current.focus();
    } else {
      Warn({ state: true, context: "Finish Editing your Panel first" });
      gsap.to(window, {
        scrollTo: "#Top",
        offsetY: 100,
      });
    }
  }

  return (
    <div
      id="Top"
      className={`w-[85%] ${Sahdowstyle(
        true
      )} mx-auto  mt-10 min-w-[320px] relative`}
    >
      <div className="w-[90%] mx-auto my-10 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10">
          {Tools.map((tool, index) => (
            <div
              className={`mx-auto mb-5 ${index > 3 ? "sm:mb-0" : "sm:mb-5"}`}
              key={tool.id}
            >
              <button
                onClick={() => setActive(index)}
                className={` ${
                  isActive === index ? Sahdowstyle("active") : Sahdowstyle(true)
                }  w-28 py-1 `}
              >
                {tool.title}
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-14">
          <div
            className={`transition-all px-3 py-1 text-center text-black text-2xl
             bg-gold-1  ml-[3px] ${Sahdowstyle()}`}
          >
            {Tools[isActive].title}
          </div>
          <div
            className={`w-10 h-10 my-auto rounded-full ${Sahdowstyle(
              "circle"
            )}`}
          ></div>
          {
            <div className="my-auto Notif hidden">
              Panel <span className="text-gold-1">Added</span>
            </div>
          }
        </div>
        <div>
          <textarea
            ref={lyricInput}
            id="lyricInput"
            onChange={() => {
              setInput(lyricInput.current.value);
              lyricInput.current.scrollHeight > lyricInput.current.offsetHeight
                ? setHeight(400)
                : undefined;
            }}
            className={`mt-5 h-[${Height}px] md:w-3/5 transition-all
             border-black border-st rounded-[7px]
             text-xl resize-none p-5 font-bold`}
          />
        </div>
        {Warning.state ? (
          <div
            id="warning"
            className="mt-10 bg-gold-0 p-3 text-white flex justify-between"
          >
            <div>{Warning.context}</div>
            <button
              onClick={() =>
                Warn({
                  state: false,
                  context: "",
                })
              }
            >
              X
            </button>
          </div>
        ) : undefined}

        <div className={`flex my-5`}>
          <button
            onClick={() => AddLyric()}
            className={`py-1 px-4 ${Sahdowstyle("circle")}
             ml-auto active:bg-black active:text-white mt-5`}
          >
            Done
          </button>
        </div>
        <div className="mt-14 mb-14">
          {Lyrics.map((panel, index) => (
            <div key={index}>
              <LyricPanel
                HandleDelete={() => Delete(index)}
                HandleEdit={() => Edit(index)}
                HandleRepeat={() => Repeat(index)}
                type={panel.type}
                Content={panel.Content}
                Access={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LyricEditor;
