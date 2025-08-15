import { usePostList } from '../../features/PostList/model/hooks/usePostList';
import { PostList } from '../../widgets/PostList/PostList';

export const PostsPage = () => {
  const { posts, loading } = usePostList();
  return <PostList isLoading={loading} posts={posts} />;
};