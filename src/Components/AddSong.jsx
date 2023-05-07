import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import MetaDataForm from "./MetaDataForm";
import LyricEditor from "./LyricEditor";
function AddSong() {
  return (
    <div>
      <Nav />
      <MetaDataForm />
      <LyricEditor />
      <Footer />
    </div>
  );
}

export default AddSong;
