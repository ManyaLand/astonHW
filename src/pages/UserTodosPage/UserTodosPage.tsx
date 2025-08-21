import { useParams } from 'react-router-dom';

export const UserTodosPage = () => {
   const { id } = useParams<{ id: string }>();
    return <h1>Список дел пользователя {id}</h1>;
};