import { NavLink, useParams } from "react-router-dom";
import style from "./UserTabs.module.css"

export const UserTabs = () => {
  const { id } = useParams();
  const links = [
    {
        id: 1,
        url: `/posts`,
        text: 'Посты'
    },
    {
        id: 2,
        url: `/posts/${id ? id : 1}`,
        text: 'Пост'
    },
    {
        id: 3,
        url: `/users/${id ? id : 1}/posts`,
        text: 'Посты пользователя'
    },
    {
        id: 4,
        url: `/users/${id ? id : 1}/albums`,
        text: 'Альбомы пользователя'
    },
    {
        id: 5,
        url: `/users/${id ? id : 1}/todos`,
        text: 'Список дел пользователя'
    },
     {
        id: 6,
        url: `/albums/${id ? id : 1}/photos`,
        text: 'Альбом'
    },
  ]

  return (
    <nav className={style.wrapper}>
        {links.map((link) => (
            <NavLink key={link.id}  className={({ isActive }) => isActive ? 
                `${style.link} ${style.activeLink}` : style.link} to={link.url} end>
                    {link.text}
            </NavLink>
        ))}
    </nav>
  );
};