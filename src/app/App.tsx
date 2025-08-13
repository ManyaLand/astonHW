import { MainLayout } from "../shared/layouts/MainLayout";
import { Footer } from '../widgets/LayoutFooter/Footer';
import { Header } from '../widgets/LayoutHeader/Header';
import { PostList } from "../widgets/PostList/PostList";

export const App = () => {
	return (
		<MainLayout header={<Header />} footer={<Footer />}>
			<PostList />
		</MainLayout>
	);
};