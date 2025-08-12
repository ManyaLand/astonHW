import { useState, useCallback } from "react";
import { Button } from '../../../shared/ui/Button/Button';

type CommentListProps = { comments: string[] };

export const CommentList = ({ comments }: CommentListProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <>
        {!collapsed && (
            <ul>
                {comments.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}
            </ul>
        )}
        <Button onClick={toggle}>
            {collapsed ? "Показать комментарии" : "Скрыть комментарии"}
        </Button>
    </>
  );
};