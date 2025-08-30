import { useGetPostsQuery } from "../../entities/post/api/postsApi";
import { PostList } from "../../widgets/PostList/PostList";

export const PostsPage = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  return <PostList isLoading={isLoading} posts={posts} />;
};