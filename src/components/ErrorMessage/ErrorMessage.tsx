import styles from "./ErrorMessage.module.css";
import { FC } from "react";

interface ErrorMessageProps {
  error: boolean;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div>
      {error && (
        <p className={styles.text}>Oops! There was an error! Please reload!</p>
      )}
    </div>
  );
};

export default ErrorMessage;
