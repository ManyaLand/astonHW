import type { ReactNode } from 'react';
import styles from "./PostCard.module.css";
import { memo } from 'react';

type PostCardProps = {
	title: string;
	content: string;
	commentList: ReactNode;
};

export const PostCard = memo(({ title, content, commentList }: PostCardProps) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.content}>{content}</p>
			{commentList}
		</article>
	);
});