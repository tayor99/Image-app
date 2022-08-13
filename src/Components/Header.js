import "../Styles/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../apis/api";

const Header = ({ handleOpenModal, setImages }) => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const searchResult = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}search/${searchText}`);
        setImages(data.result);
      } catch (e) {
        console.log(e);
      }
    };
    if (searchText) {
      const timeOutId = setTimeout(() => {
        searchResult();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchText]);
  return (
    <div className="header">
      <div className="header__logo">
        <h1>ImageRepo</h1>
      </div>

      <form className="header__search">
        <AiOutlineSearch className="header__searchIcon" />
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </form>

      <div className="header__upload">
        <button onClick={handleOpenModal}>Upload Image</button>
      </div>
    </div>
  );
};

export default Header;
