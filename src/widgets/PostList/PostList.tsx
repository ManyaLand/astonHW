import { PostCard } from "../../entities/post/ui/PostCard";
import { mockPosts } from "../../entities/post/mocks/posts";
import styles from "./PostList.module.css";

export const PostList = () => {
	return (
		<>
			<h1>Последние посты:</h1>
			<div className={styles.wrapper}>
				{mockPosts.map((post) => (
					<PostCard
						key={post.id}
						title={post.title}
						content={post.content}
					/>
				))}
			</div>
		</>
	);
};