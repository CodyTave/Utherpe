import { artwork, Sigma } from "../assets";
import { Featured } from "../assets/Constants/Data";
import Stats from "./Stats";
function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="grid bg-purple col-span-2 border-t-black md:border-t-purple border-st border-x-black  border-b-black items-center selection:bg-pink">
          <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:mx-auto mt-7 ">
            <img
              className="w-52 xxs:w-64  transition-all hover:transition-all mx-auto  shadow-neo hover:shadow-neoH "
              src={Featured.Artwork}
            />
            <div className=" lg:mt-5 mt-8 mx-auto mb-5">
              <h1 className="text-2xl mb-4 md:text-left text-center">
                {Featured.SongTitle}
              </h1>
              <h1 className="text-lg mb-4 md:text-left text-center text-white">
                {Featured.ArtistName}
              </h1>
              <p className="font-extrabold md:mx-0 mx-auto w-2/3 md:text-left text-center">
                {Featured.Preview}
                <span className="cursor-pointer font-black text-white">
                  ...View More
                </span>
              </p>
            </div>
          </div>
          <Stats Song={Featured} />
        </div>
        <div className="flex items-center bg-pink selection:bg-purple  border-st border-b-black border-r-black border-t-pink border-l-black lg:border-l-pink ">
          <img className="w-1/2 mx-auto my-20" src={Sigma} />
        </div>
      </div>
    </>
  );
}

export default Hero;
