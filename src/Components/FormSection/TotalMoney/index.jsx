import styles from "./style.module.scss";
export const TotalMoney = ({ noteNumber }) => {
  return (
    <div className={styles.totalMoneyBox}>
      <div>
        <h3 className="title three">Valor total:</h3>
        <p className="paragraphPink">
          {noteNumber.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <p className="paragraph grey3">O valor se refere ao saldo</p>

      <p></p>
    </div>
  );
};
