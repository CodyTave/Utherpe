import { logo } from "../assets";
import { SocialMedia } from "../assets/Constants";
import { FooterLinks } from "../assets/Constants";
const linksItems =
  "font-bold text-lg mb-7 cursor-pointer transition-all hover:transition-all hover:underline";
function Footer() {
  return (
    <div className="text-white">
      <div className="flex items-center h-[30vh] ">
        <div className="mx-auto">
          <img className="w-2/6 mx-auto" src={logo} />
        </div>
      </div>
      <div className="flex bg-black pb-10 ">
        <div className="flex w-[90%] mt-10 mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-3">
            <div className="ml-auto">
              <div>
                <h1 className="text-6xl">PEACE.</h1>
                <div className="grid grid-cols-4 mt-10">
                  {SocialMedia.map((sm, index) => (
                    <img
                      key={sm.id}
                      className={`${
                        sm.id === "euterpe" ? "w-1/2" : "w-2/3"
                      } mr-auto my-auto cursor-pointer`}
                      src={sm.logo}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2 md:ml-40 mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-32">
              <div>
                {FooterLinks[0].map((fl, index) => (
                  <div key={fl.id} className={linksItems}>
                    {fl.title}
                  </div>
                ))}
              </div>
              <div>
                {FooterLinks[1].map((fl, index) => (
                  <div key={fl.id} className={linksItems}>
                    {fl.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
