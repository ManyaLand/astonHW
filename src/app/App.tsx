import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";

export const App = () => {
	return (
		<MainLayout>
			<PostList isLoading={false}/>
		</MainLayout>
	);
};