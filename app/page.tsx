"use client";
import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";

const todos = [
  { id: 1, title: "xd", completed: false },
  { id: 2, title: "xd2", completed: false },
  { id: 3, title: "xd3", completed: false },
  { id: 4, title: "xd 4", completed: false },
  { id: 5, title: "xd5", completed: false },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [todosData, setTodosData] = useState<{
    id: number;
    title: string;
    completed: boolean;
  }[] | []>([]);

  const fetchTodos = async (query = "") => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("fetched todos");

    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );

    setIsLoading(false);
    setTodosData(filteredTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  return (
    <main className="text-black">
      <h1 data-testid="cypress-title">Cypress Demo</h1>
     {isLoading ? (
      <div>Loading...</div>
     ):(
      todos?.map((todo)=><TodoCard key={todo.id} todo={todo}/>)
     )}
    </main>
  );
}
