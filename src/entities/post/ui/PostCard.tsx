import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  content: string;
};

export const PostCard = ({ title, content }: PostCardProps) => {
	return (
		<>
			<article className={styles.card}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.content}>{content}</p>
			</article>
		</>
	
	);
};