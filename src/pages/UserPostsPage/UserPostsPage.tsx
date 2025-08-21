import { useParams } from 'react-router-dom';

export const UserPostsPage = () => {
    const { id } = useParams<{ id: string }>();
    return <h1>Список постов пользователя {id}</h1>;
};