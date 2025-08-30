import { useParams } from "react-router-dom";
import { useGetPostsByUserQuery } from "../../entities/post/api/postsApi";
import { PostList } from "../../widgets/PostList/PostList";

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const { data: posts = [], isLoading } = useGetPostsByUserQuery(userId);

  return (
    <>
      <h1>Посты пользователя {userId}</h1>
      <PostList isLoading={isLoading} posts={posts} />
    </>
  );
};