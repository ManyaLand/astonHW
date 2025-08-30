import { useState } from 'react';
import { useGetCommentsByPostQuery } from "../../../entities/comment/api/commentsApi";
import { Button } from '../../../shared/ui/Button/Button';

type CommentListProps = {
  postId: number;
};

export const CommentList = ({ postId }: CommentListProps) => {
  const { data: comments = [], isLoading } = useGetCommentsByPostQuery(postId);
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () =>  {
    setCollapsed((prev) => !prev); 
  }

  if (isLoading) return <p>Загрузка комментариев...</p>;
    return (
    <>
        {!collapsed && (
            <ul>
                {comments.map((c, i) => (
                    <li key={i}>{c.body}</li>
                ))}
            </ul>
        )}
        <Button onClick={toggle}>
            {collapsed ? "Показать комментарии" : "Скрыть комментарии"}
        </Button>
    </>
  );
};