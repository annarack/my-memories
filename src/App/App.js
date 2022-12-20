import MainMenu from "../MainMenu/MainMenu";
import Pinboard from "../Pinboard/Pinboard";
import Slideshow from "../Slideshow/Slideshow";
import data from "../data.js";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("pinboard");

  const imageData = data.filter((item) => item.type === "polaroid");
  return (
    <>
      <MainMenu pageHandler={setCurrentPage} currentPage={currentPage} />
      {currentPage === "pinboard" ? (
        <Pinboard data={data} />
      ) : (
        <Slideshow imageData={imageData} />
      )}
    </>
  );
}

export default App;
