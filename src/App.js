import { useState } from "react";
import "./App.css";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import UploadModal from "./Components/UploadModal";
import ReactModal from "react-modal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="app">
      <Header handleOpenModal={handleOpenModal} setImages={setImages} />
      <Gallery images={images} setImages={setImages} />
      <ReactModal isOpen={modalIsOpen} className="app__modal">
        <UploadModal handleCloseModal={handleCloseModal} />
      </ReactModal>
    </div>
  );
}

export default App;
