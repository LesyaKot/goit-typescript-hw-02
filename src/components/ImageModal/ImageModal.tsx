import Modal from "react-modal";

import styles from "./ImageModal.module.css";

import { FC } from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
interface ImageModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ imageUrl, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
      appElement={document.getElementById("root") as HTMLElement}
    >
      <div>
        <img className={styles.img} src={imageUrl} alt="Image" />
      </div>
    </Modal>
  );
};

export default ImageModal;
