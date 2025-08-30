import type { ReactNode } from 'react';
import styles from "./PostCard.module.css";
import { Button } from '../../../shared/ui/Button/Button';
import { Link } from 'react-router-dom';

type PostCardProps = {
	id: string | number;
  	title: string;
  	body: string;
  	commentList: ReactNode;
};

export const PostCard = ({ id, title, body, commentList }: PostCardProps) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.content}>{body}</p>
				<Button><Link to={`${id}`} className={styles.link}>Детали поста</Link></Button>
				<section className={styles.commentsSection}>
					{commentList}
				</section>
		</article>
	);
};