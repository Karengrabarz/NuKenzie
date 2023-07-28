import { Card } from "./Card";
import styles from "./style.module.scss";

export const ListSection = ({ noteList, removeNote }) => {
  return (
    <div className="container">
      <section className={styles.listSectionBox}>
        <h2 className="title three">Resumo financeiro</h2>
        {noteList.length > 0 ? (
          <ul>
            {noteList.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                description={note.description}
                value={+note.value}
                removeNote={removeNote}
                category={note.category}
              />
            ))}
          </ul>
        ) : (
          <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
        )}
      </section>
    </div>
  );
};
