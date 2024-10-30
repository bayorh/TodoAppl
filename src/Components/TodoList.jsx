import styles from "./todolist.module.css"
import TodoItem from "./TodoItem";
export default function TodoList({ todoitems, setTodoItems }) {
  
const sortedTodoItems = todoitems.slice().sort((a,b)  => Number(a.done) - Number(b.done))
  return (
    <div className={styles.list}>
      {sortedTodoItems.map((item) => (
        <TodoItem key={item.name} item={item}  todoitems={todoitems} setTodoItems={setTodoItems}/>
      ))}
    </div>
  );
}
