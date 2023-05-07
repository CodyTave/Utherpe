import { useState } from "react";
import { flame } from "../assets";
import { Trendings } from "../assets/Constants/Data";
function Trending() {
  const [Trends, setTrends] = useState(Trendings.slice(0, 4));
  function LoadMore() {
    Trends.length > 4 ? setTrends(Trendings.slice(0, 4)) : setTrends(Trendings);
  }

  return (
    <>
      <div className="flex items-center mt-10">
        <div className="mx-auto flex">
          <h1 className="text-5xl ">TRENDING</h1>
          <img className="w-12 animate-pulse" src={flame} />
        </div>
      </div>
      {Trends.map((song, index) => (
        <div layout key={song.Num} className="mb-10">
          <div className="grid md:grid-cols-5 xs:grid-cols-4 grid-cols-2 mt-10 w-[90%] mx-auto border-st border-black shadow-neo2 hover:shadow-neo transition-all hover:transition-all">
            <div className="flex items-center">
              <h1 className="mx-auto text-4xl">{song.Num}</h1>
            </div>
            <div className="flex  items-center">
              <div className="bg-black w-28 h-20 mx-auto xs:mx-0">
                <img className="object-cover w-28 h-20" src={song.Artwork} />
              </div>
            </div>
            <div className="xs:flex hidden items-center">
              <h1 className=" text-2xl">{song.SongName}</h1>
            </div>
            <div className="xs:flex hidden items-center">
              <h1 className="mx-auto text-2xl">{song.Artist[0]}</h1>
            </div>
            <div className="md:flex items-center hidden lg:ml-10">
              <div className="grid grid-cols-3 gap-5 mx-auto">
                <h1 className="">{song.Streams}</h1>
                <h1>{song.LookUps}</h1>
                <h1>{song.Quotes}</h1>
              </div>
            </div>
          </div>
          <div className="xs:hidden transition-all">
            <div className="grid grid-cols-2 w-[90%] border-st border-black mx-auto mt-3 p-3 ">
              <div className="flex  items-center">
                <h1 className=" text-2xl ">{song.SongName}</h1>
              </div>
              <div className="flex  items-center">
                <h1 className="mx-auto text-2xl">{song.Artist[0]}</h1>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 w-[90%] border-st border-black mx-auto mt-3 p-3">
              <h1 className="mx-auto">{song.Streams}</h1>
              <h1 className="mx-auto">{song.LookUps}</h1>
              <h1 className="mx-auto">{song.Quotes}</h1>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center mb-5">
        <div
          onClick={() => {
            LoadMore();
          }}
          className="mx-auto cursor-pointer text-2xl px-5 py-3 border-st border-black shadow-neo2 hover:shadow-neo transition-all hover:transition-all "
        >
          {Trends.length > 4 ? "Show Less" : "Load More"}
        </div>
      </div>
    </>
  );
}

export default Trending;
