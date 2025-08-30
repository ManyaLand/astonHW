import { withLoading } from "../../shared/lib/hoc/withLoading";
import { useCallback, useMemo, useState } from "react";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { CommentList } from "../CommentList/ui/CommentList";
import { PostCard } from "../../entities/post/ui/PostCard";
import type { Post } from "../../entities/post/model/types";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

type PostListBaseProps = { posts: Post[] };

const PostListBase = ({ posts }: PostListBaseProps) => {
  const [minLength, setMinLength] = useState(0);
  const filteredPosts = useMemo(() => filterByLength(posts, minLength), [minLength, posts]);

  const handleFilterChange = useCallback((length: number) => setMinLength(length), []);

  return (
    <>
      <h1>Последние посты:</h1>
      <PostLengthFilter onFilterChange={handleFilterChange} />
      <ItemList<Post>
        className={'wrapper'}
        items={filteredPosts}
        getKey={(p) => p.id}
        renderItem={(post) => (
          <PostCard key={post.id} commentList={<CommentList postId={post.id} />} {...post} />
        )}
      />
    </>
  );
};

export const PostList = withLoading(PostListBase);