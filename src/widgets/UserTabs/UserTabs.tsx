import { NavLink, useParams } from "react-router-dom";
import style from "./UserTabs.module.css";

export const UserTabs = () => {
  const { id } = useParams<{ id?: string }>();
  const currentId = id ? Number(id) : 1;

  const links = [
    { id: 1, url: `/posts`, text: "Посты" },
    { id: 2, url: `/posts/${currentId}`, text: "Пост" },
    { id: 3, url: `/users/${currentId}/posts`, text: "Посты пользователя" },
    { id: 4, url: `/users/${currentId}/albums`, text: "Альбомы пользователя" },
    { id: 5, url: `/users/${currentId}/todos`, text: "Список дел пользователя" },
    { id: 6, url: `/albums/${currentId}/photos`, text: "Альбом" },
  ] as const;

  return (
    <nav className={style.wrapper}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          className={({ isActive }) => (isActive ? `${style.link} ${style.activeLink}` : style.link)}
          to={link.url}
          end
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};