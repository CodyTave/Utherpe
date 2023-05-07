import Footer from "./Footer";
import Nav from "./Nav";
import SongInfo from "./SongInfo";
import { Featured } from "../assets/Constants/Data";
import Lyrics from "./Lyrics";
function SongPage() {
  return (
    <>
      <Nav />
      <SongInfo Song={Featured} />
      <Lyrics Song={Featured} />
      <Footer />
    </>
  );
}

export default SongPage;
