import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todoitems, setTodoItems] = useState([]);
  const completeTask = todoitems.filter((item)=> item.done).length
  return (
    <div>
      <Form todoitems={todoitems} setTodoItems={setTodoItems} />
      <TodoList todoitems={todoitems} setTodoItems={setTodoItems} />
      <Footer completedTask={completeTask} totalTask={ todoitems.length}/>
    </div>
  );
}
