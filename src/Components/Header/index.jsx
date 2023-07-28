import logo from "../../assets/Logo.png";
import styles from "./style.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};
