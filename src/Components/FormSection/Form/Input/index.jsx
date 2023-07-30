import styles from "./style.module.scss";

export const Input = ({ label, id, type, placeholder, value, setValue,required }) => {
  return (
    <div className={styles.inputBox}>
      <label className="paragraph" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
      />
    </div>
  );
};
