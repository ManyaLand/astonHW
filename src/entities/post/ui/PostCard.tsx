import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  content: string;
  comments: string[];
};

export const PostCard = ({ title, content, comments }: PostCardProps) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.content}>{content}</p>
			<CommentList comments={comments} />
		</article>

	);
};