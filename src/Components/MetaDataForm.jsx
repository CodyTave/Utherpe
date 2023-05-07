import { inputs, Sahdowstyle } from "../assets/Constants";

function MetaDataForm() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 item">
        <div>
          {inputs.map((inp, index) => (
            <div key={inp.id}>
              <label className="block mt-2">{`${inp.label} ${
                inp.required ? "*" : ""
              } : `}</label>
              {inp.dropdown ? (
                <select
                  className={`outline-none h-9 w-56 xs:w-72 px-1 mt-2 ${Sahdowstyle()}`}
                >
                  {inp.Genres.map((genre, index) => (
                    <option value={genre} key={index}>
                      {genre}
                    </option>
                  ))}
                </select>
              ) : (
                <div>
                  <input
                    className={`outline-none h-9 w-56 xs:w-72 px-1 mt-2 ${Sahdowstyle()}`}
                  />
                  {inp.add ? (
                    <button className={`block mt-5 px-6 h-9 ${Sahdowstyle()}`}>
                      Add
                    </button>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <div
            className={`w-52 xxs:w-64 h-52 mt-10 sm:ml-auto items-center flex ${Sahdowstyle()} `}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MetaDataForm;
