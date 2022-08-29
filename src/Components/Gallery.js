import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Styles/Gallery.css';
import { BASE_URL } from '../apis/api';

const Gallery = ({ images, setImages }) => {
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}?page=${pages}`);
        setTotalPages(data.totalPages);
        setImages(data.getPosts);
      } catch (e) {
        console.log(e);
      }
    };
    getImages();
  }, [pages]);

  const handleNext = () => {
    if (pages === totalPages) {
      return;
    } else {
      setPages((pages) => pages + 1);
    }
  };

  const handlePrevious = () => {
    if (pages === 1) {
      return;
    } else {
      setPages((pages) => pages - 1);
    }
  };

  return (
    <div className="gallery__container">
      {images.map((image) => {
        return (
          <div class="hover__img gallery__images" key={image?._id}>
            <div>
              <figure>
                <img src={image?.image} alt={image?.title} />
              </figure>
              <span>{image?.title}</span>
            </div>
          </div>
        );
      })}
      <div className="page__control">
        <button className="previous" onClick={handlePrevious}>
          Previos
        </button>
        <span>{pages}</span>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
