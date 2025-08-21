import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { useCallback, useMemo, useState } from 'react';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { CommentList } from '../CommentList/ui/CommentList';

type Post = {
  id: number,
  title: string,
  body: string,
}

type PostListBaseProps = {
  posts: Post[];
};

const PostListBase = ({ posts }: PostListBaseProps) => {
	const [minLength, setMinLength] = useState(0);
	 const filteredPosts = useMemo(() => {
		return filterByLength(posts, minLength)
	}, [minLength, posts]);
	  const handleFilterChange = useCallback((length: number) => {
		setMinLength(length);
	}, []);

	return (
		<>
			<h1>Последние посты:</h1>
		   <PostLengthFilter onFilterChange={handleFilterChange} />
		    <div className={styles.wrapper}>
				{filteredPosts.map((post) => (
					<PostCard
						commentList={<CommentList comments={post.comments}/>}
						key={post.id}
						{...post}
					/>
				))}
			</div>
		</>
	);
};

export const PostList = withLoading(PostListBase);