import styles from "./style.module.scss";
export const Card = ({ description, value, category, removeNote, id }) => {
  return (
    <li
      className={`
        ${styles.card}
        ${category === "Entrada" ? styles.green : styles.grey}`}
    >
      <div>
        <h3 className="title three">{description}</h3>
        <p className="paragraph">{category}</p>
      </div>
      <div>
        <p className="paragraph">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button className="btn2" onClick={() => removeNote(id)}>
          Excluir
        </button>
      </div>
    </li>
  );
};
