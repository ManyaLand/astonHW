import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../entities/post/api/postsApi";

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const { data: post, isLoading } = useGetPostByIdQuery(postId);

  if (isLoading) return <div>Загрузка поста...</div>;
  if (!post) return <div>Пост не найден</div>;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};