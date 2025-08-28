import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { useCallback, useMemo, useState, memo } from 'react';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { CommentList } from '../CommentList/ui/CommentList';

type Post = {
  id: number,
  title: string,
  content: string,
  comments: string[],
}

type PostListBaseProps = {
  posts: Post[];
};

const PostListBase = memo(({ posts }: PostListBaseProps) => {
	const [minLength, setMinLength] = useState(0);
	const filteredPosts = useMemo(() => {
		return filterByLength(posts, minLength)
	}, [minLength, posts]);
	const handleFilterChange = useCallback((length: number) => {
		setMinLength(length);
	}, []);
    const renderCommentList = useCallback((comments: string[]) => (
        <CommentList comments={comments} />
    ), []);
	return (
		 <>
            <h1>Последние посты:</h1>
            <PostLengthFilter 
                minLength={minLength} 
                onFilterChange={handleFilterChange} 
            />
            <div className={styles.wrapper}>
                {filteredPosts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        commentList={renderCommentList(post.comments)}
                    />
                ))}
            </div>
        </>
	);
});

export const PostList = withLoading(PostListBase);