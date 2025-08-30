import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { MainLayout } from '../../../shared/layouts/MainLayout';
import { Header } from '../../../widgets/LayoutHeader/Header';
import { Footer } from '../../../widgets/LayoutFooter/Footer';
import { PostsPage } from '../../../pages/PostsPage/PostsPage';
import { PostDetailsPage } from '../../../pages/PostDetailPage/PostDetailsPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage/UserAlbumsPage';
import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage/AlbumPhotosPage';
import { UserTodosPage } from '../../../pages/UserTodosPage/UserTodosPage';
import { UserPostsPage } from '../../../pages/UserPostsPage/UserPostsPage';

const LayoutWithHeaderFooter = () => (
    <MainLayout header={<Header />} footer={<Footer />}>
        <Outlet />
    </MainLayout>
);

export const router = createBrowserRouter([
  {
    element: <LayoutWithHeaderFooter />,
    children: [
        { index: true, element: <Navigate to="/posts" replace /> },
        { path: "/posts", element: <PostsPage /> },
        { path: "/posts/:id", element: <PostDetailsPage /> },
        { path: "/users/:id/posts", element: <UserPostsPage /> },
        { path: "/users/:id/albums", element: <UserAlbumsPage /> },
        { path: "/users/:id/todos", element: <UserTodosPage /> },
        { path: "/albums/:id/photos", element: <AlbumPhotosPage /> },
        { path: "*", element: <Navigate to="/posts" replace /> },
    ],
  },
]);