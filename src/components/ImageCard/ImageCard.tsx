import styles from "./ImageCard.module.css";
import { Image } from "../App/App.types";
import React, { FC } from "react";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <img
      onClick={() => onClick(image)}
      className={styles.img}
      src={image.urls.small}
      alt={image.alt_description}
    />
  );
};

export default ImageCard;
