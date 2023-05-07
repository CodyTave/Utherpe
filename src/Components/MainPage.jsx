import Nav from "./Nav";
import Hero from "./Hero";
import Trending from "./Trending";
import About from "./About";
import Footer from "./Footer";
function MainPage() {
  return (
    <div className="selection:bg-gold-1 selection:text-white">
      <Nav />
      <Hero />
      <Trending />
      <About />
      <Footer />
    </div>
  );
}

export default MainPage;
