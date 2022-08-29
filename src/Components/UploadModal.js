import { useState } from "react";
import axios from "axios";
import "../Styles/uploadModal.css";
import { UPLAOD_URL } from "../apis/api";
const UploadModal = ({ handleCloseModal }) => {
  const [title, setTitle] = useState("");
  const [selectFile, setSelectedFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        UPLAOD_URL,
        {
          title: title,
          image: selectFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="uploadModal">
      <button className="uploadModal__closeBtn" onClick={handleCloseModal}>
        X
      </button>

      <form className="uploadModal__form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="upload">Upload Image</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            setSelectedFile(e.target.files[0]);
          }}
        />
        <div className="uploadModalForm__btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UploadModal;
