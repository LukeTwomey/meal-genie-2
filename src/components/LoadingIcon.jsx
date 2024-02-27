import { AiOutlineLoading } from "react-icons/ai";
import styles from "./LoadingIcon.module.css";

const LoadingIcon = () => {
  return (
    <div className={styles.iconContainer}>
      <AiOutlineLoading className={styles.icon} />
    </div>
  );
};

export default LoadingIcon;
