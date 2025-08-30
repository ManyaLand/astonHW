import { useEffect, useState } from "react";
import type { Post } from '../../../../entities/post/model/types';
import type { Comment } from '../../../../entities/comment/model/types';

export interface PostWithComments extends Post {
  comments: Comment[];
}

export const usePostList = () => {
  const [posts, setPosts] = useState<PostWithComments[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, commentsResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/comments"),
        ]);

        const postsData: Post[] = await postsResponse.json();
        const commentsData: Comment[] = await commentsResponse.json();

        const postsWithComments = postsData.map<PostWithComments>((post) => ({
          ...post,
          comments: commentsData.filter((comment) => comment.postId === post.id),
        }));
        setPosts(postsWithComments);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Что-то пошло не так:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  return { posts, loading };
};