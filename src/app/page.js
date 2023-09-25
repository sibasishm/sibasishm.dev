import Image from 'next/image';
import { allBlogs } from 'contentlayer/generated';
import CoverSection from '../components/Home/CoverSection';
import FeaturedPosts from '../components/Home/FeaturedPosts';
import RecentPosts from '../components/Home/RecentPosts';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center'>
			<CoverSection blogs={allBlogs} />
			<FeaturedPosts blogs={allBlogs} />
			<RecentPosts blogs={allBlogs} />
		</main>
	);
}
