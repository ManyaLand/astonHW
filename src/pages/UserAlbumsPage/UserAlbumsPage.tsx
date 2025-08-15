import { useParams } from 'react-router-dom';

export const UserAlbumsPage = () => {
    const { id } = useParams<{ id: string }>();
    return <h1>Альбомы пользователя {id}</h1>;
};