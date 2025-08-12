import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading";
import { useCallback, useMemo, useState } from 'react';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';

const PostListBase = () => {
	const [minLength, setMinLength] = useState(0);
	 const filteredPosts = useMemo(() => {
		return filterByLength(minLength)
	}, [minLength]);
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
						key={post.id}
						{...post}
					/>
				))}
			</div>
		</>
	);
};

export const PostList = withLoading(PostListBase);