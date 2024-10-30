import styles from "./todoitem.module.css";
export default function TodoItem({ item, todoitems, setTodoItems }) {
  function HandleDelete(item) {
    const filteredTodoItems = todoitems.filter((todo) => todo !== item);
    setTodoItems(filteredTodoItems);
  }
  function HandleTaskCompleted(name) {
    console.log(name);
    const newTodo = todoitems.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodoItems(newTodo);
  }
  const setClassName = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={setClassName}
          onClick={() => HandleTaskCompleted(item.name)}
        >
          {" "}
          {item.name}
        </span>
        <span>
          <button
            onClick={() => HandleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
