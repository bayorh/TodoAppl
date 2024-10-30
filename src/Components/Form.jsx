import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todoitems, setTodoItems }) {
  const [todoitem, setTodoItem] = useState({name: "", done : false});

  function HandleSubmit(e) {
    e.preventDefault();
    setTodoItems([...todoitems, todoitem]);
    setTodoItem({name: "", done : false});
  }
  return (
    <div>
      <form className={styles.form} onSubmit={HandleSubmit} type="submit">
        <input
          className={styles.modernInput}
          onChange={(e) => setTodoItem({name : e.target.value, done: false})}
          type="text"
          value={todoitem.name}
          placeholder="Enter a todo item"
        />
        <button className={styles.modernButton} type="submit">Add </button>
      </form>
    </div>
  );
}
