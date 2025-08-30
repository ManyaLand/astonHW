import { useParams } from "react-router-dom";
import { useGetAlbumsByUserQuery } from "../../entities/album/api/albumsApi";
import type { Album } from "../../entities/album/model/types";

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const { data: albums = [], isLoading } = useGetAlbumsByUserQuery(userId);

  if (isLoading) return <div>Загрузка альбомов...</div>;

  return (
    <>
      <h1>Альбомы пользователя {userId}</h1>
      {albums.map((album: Album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </>
  );
};