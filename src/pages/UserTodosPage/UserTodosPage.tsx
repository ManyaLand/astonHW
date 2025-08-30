import { useParams } from "react-router-dom";
import { useGetTodosByUserQuery } from "../../entities/todo/api/todosApi";
import type { Todo } from "../../entities/todo/model/types";

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { data: todos = [], isLoading } = useGetTodosByUserQuery(userId);

  if (isLoading) return <div>Загрузка списка дел...</div>;

  return (
    <>
      <h1>Список дел пользователя {userId}</h1>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          {todo.title}
        </div>
      ))}
    </>
  );
};