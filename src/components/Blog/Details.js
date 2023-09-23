import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { slug } from 'github-slugger';
// import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
	return (
		<div className='flex flex-wrap items-center justify-around px-2 py-2 mx-5 text-lg font-medium rounded-lg md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark sm:text-xl md:mx-10'>
			<time className='m-3'>
				{format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
			</time>
			{/* <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span> */}
			<div className='m-3'>{blog.readingTime.text}</div>
			<Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>
				#{blog.tags[0]}
			</Link>
		</div>
	);
};

export default BlogDetails;
