import styles from "./LoadMoreBtn.module.css";
import { FC } from "react";
import { Image } from "../App/App.types";

interface LoadMoreBtnProps {
  isLoadMore: boolean;
  //  onClick: () =>  void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ isLoadMore, onClick }) => {
  return (
    <div className={styles.wrap}>
      {isLoadMore && (
        <button className={styles.btn} onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
