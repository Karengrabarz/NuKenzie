import { useState } from "react";
import { DefaultTemplate } from "../../Components/DefaultTemplate";
import styles from "./style.module.scss";
import { ListSection } from "../../Components/ListSection";
import { FormSection } from "../../Components/FormSection";

export const HomePage = () => {
  const [noteList, setNoteList] = useState([]);

  const addNote = (formData) => {
    const newNote = { ...formData, id: crypto.randomUUID() };
    setNoteList([...noteList, newNote]);
  };

  const removeNote = (removeId) => {
    const newNoteList = noteList.filter((note) => note.id !== removeId);
    setNoteList(newNoteList);
  };
  return (
    <DefaultTemplate>
      <div className="container">
        <div className={styles.homePageBox}>
          <FormSection noteList={noteList} addNote={addNote} />
          <ListSection noteList={noteList} removeNote={removeNote} />
        </div>
      </div>
    </DefaultTemplate>
  );
};
