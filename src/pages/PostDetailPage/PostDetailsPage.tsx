import { useParams } from 'react-router-dom';

export const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    return <h1>Детали поста {id}</h1>;
};