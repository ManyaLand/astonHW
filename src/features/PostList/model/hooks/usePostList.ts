import { useEffect, useState } from "react";

export const usePostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, commentsResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/comments")
        ]);

        const postsData = await postsResponse.json();
        const commentsData = await commentsResponse.json();

        const postsWithComments = postsData.map(post => ({
          ...post,
          comments: commentsData.filter(comment => comment.postId === post.id)
        }));
        setPosts(postsWithComments);
      } catch (error) {
        console.error("Что-то пошло не так:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, loading };
};