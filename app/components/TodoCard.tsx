import React, { useState } from "react";

const TodoCard = ({
  todo,
}: {
  todo: { id: number; title: string; completed: boolean };
}) => {
  const [checked, setChecked] = useState(todo.completed);

  return <div>
    <span data-testid={`todo-${todo.id}`}>{todo.title}</span>
    <input 
    type="checkbox" 
    checked={checked} 
    onChange={(e)=>setChecked(e.target.checked)}/>
  </div>;
};

export default TodoCard;
