import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";
import styles from "./style.module.scss";

export const Form = ({ addNote }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();
    addNote({ description, value, category });
    setDescription("");
    setValue("");
    setCategory("Entrada");
  };
  return (
    <div className={styles.formBox}>
      <form onSubmit={submit}>
        <Input
          label="Descrição"
          type="text"
          placeholder="Digite aqui a sua descrição"
          id="description"
          value={description}
          setValue={setDescription}
          required={true}
        />
        <p className="paragraph grey-50">Ex: Compra de roupas</p>
        <Input
          label="Valor (R$)"
          type="number"
          placeholder="1"
          id="value"
          value={value}
          setValue={setValue}
          required={true}
        />
        <Select
          label="Tipo de valor:"
          id="category"
          value={category}
          setValue={setCategory}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </Select>
        <Button type="submit" />
      </form>
    </div>
  );
};
