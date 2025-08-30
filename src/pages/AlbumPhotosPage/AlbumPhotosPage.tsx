import { useParams } from "react-router-dom";

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>Список фотографий {id} альбома</h1>;
};