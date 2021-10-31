import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoLength } from "./TodoLength";

const getKey = () => {
  Math.random().toString(32).substring(2);
};

export const Todo = () => {
  const [items, setItems] = useState([
    { key: getKey(), text: "javascript", done: false },
    { key: getKey(), text: "typescript", done: true },
    { key: getKey(), text: "java", done: false },
    { key: getKey(), text: "Ruby", done: false }
  ]);

  return (
    <div className="panel">
      <div className="panel-heading">React Todo</div>

      {items.map((item) => (
        // <label className="panel-block">
        //   <input type="checkbox" />
        //   {item.text}
        // </label>
        <TodoList key={item.key} item={item} />
      ))}

      <TodoLength item={items} />
    </div>
  );
};
