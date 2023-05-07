function Stats(props) {
  return (
    <div className="mx-auto mb-10 transition-all py-5 px-3 xl:px-20 text-2xl bg-white border-black border-st ">
      <div className="sm:grid grid-cols-3 gap-[60px] hidden">
        <h1>{props.Song.Streams} Streams</h1>
        <h1>{props.Song.LookUps} LookUps</h1>
        <h1>{props.Song.Quotes} Quotes</h1>
      </div>
      <div className="grid sm:hidden grid-cols-3  gap-10">
        <h1>{props.Song.Streams} </h1>
        <h1>{props.Song.LookUps} </h1>
        <h1>{props.Song.Quotes} </h1>
      </div>
    </div>
  );
}

export default Stats;
