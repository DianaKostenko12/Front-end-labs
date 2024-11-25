import React, { useState } from "react";
import styles from "./Image.module.css";

function Image() {
  const [images, setImages] = useState([]);
  const [scales, setScales] = useState([]);

  const addImage = () => {
    setImages([...images, "Kyiv.jpg"]);
    setScales([...scales, 1]);
  };

  const zoomLastImage = (scaleFactor) => {
    if (scales.length === 0) return;

    setScales((prevScales) => {
      const updatedScales = [...prevScales];
      const lastIndex = updatedScales.length - 1;

      updatedScales[lastIndex] = Math.min(
        3,
        Math.max(0.5, updatedScales[lastIndex] * scaleFactor)
      );

      return updatedScales;
    });
  };

  const deleteImage = () => {
    setImages(images.slice(0, -1));
    setScales(scales.slice(0, -1));
  };

  return (
    <div>
      <div className={`${styles.imageContainer} image-container`}>
        <a href="https://kiyavia.com/cities/kyiv">
          <img
            className={`${styles.mainImg} main-img`}
            src="/Kyiv.jpg"
            alt="Зображення"
          />
        </a>
        {images.map((src, index) => (
          <div key={index} className={styles.deletableImg}>
            <img
              src={src}
              alt="Зображення"
              className={styles.addedImg}
              style={{ transform: `scale(${scales[index]})` }}
            />
          </div>
        ))}
      </div>

      <div className={`${styles.buttonContainer} button-container`}>
        <button className={styles.button} onClick={addImage}>
          Додати
        </button>
        <button className={styles.button} onClick={() => zoomLastImage(1.4)}>
          Збільшити
        </button>
        <button
          className={styles.button}
          onClick={() => zoomLastImage(1 / 1.4)}
        >
          Зменшити
        </button>
        <button className={styles.button} onClick={deleteImage}>
          Видалити
        </button>
      </div>
    </div>
  );
}

export default Image;
