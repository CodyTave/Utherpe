import Stats from "./Stats";
function SongInfo(props) {
  return (
    <div className="flex bg-gold-1 items-center">
      <div className="xl:w-[80%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-5">
          <div>
            <img
              className="w-52 xxs:w-64  transition-all hover:transition-all mx-auto   shadow-neo hover:shadow-neoH "
              src={props.Song.Artwork}
            />
          </div>
          <div className="col-span-2 md:mt-0 mt-7">
            <h1 className="text-3xl mb-4">{props.Song.SongTitle}</h1>
            <h1 className="text-2xl mb-5">{props.Song.ArtistName}</h1>
            <h1 className="text-xl mb-5">
              Featuring : {props.Song.ArtistName}
            </h1>
            <h1 className="text-xl mb-5">
              Produced By : {props.Song.ArtistName}
            </h1>
            <Stats Song={props.Song} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongInfo;
