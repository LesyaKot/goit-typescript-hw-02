import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React, { FC } from "react";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={styles.list}>
      {items &&
        items.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={onImageClick} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
