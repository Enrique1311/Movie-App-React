import { FaSpinner } from "react-icons/fa";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.whileSpinning} size={60}/>
    </div>
  )
}

export default Loading
