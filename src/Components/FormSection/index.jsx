import { Form } from "./Form";
import { TotalMoney } from "./TotalMoney";
import styles from "./style.module.scss";

export const FormSection = ({ noteList, addNote }) => {
  const noteNumber = noteList.reduce(function (prevValue, note) {
    if (note.category === "Entrada") {
      return prevValue + +note.value;
    } else {
      return prevValue - +note.value;
    }
  }, 0);

  return (
    <section>
      {noteList.length > 0 ? (
        <div className={styles.formSectionBox}>
          <Form addNote={addNote} />
          <TotalMoney noteNumber={+noteNumber} />
        </div>
      ) : (
        <div className={styles.formSectionBox}>
          <Form addNote={addNote} />
        </div>
      )}
    </section>
  );
};
