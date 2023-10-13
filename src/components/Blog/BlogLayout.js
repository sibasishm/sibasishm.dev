import React from 'react';
import Tag from '../Tag';
import Link from 'next/link';
import Image from 'next/image';
import { slug } from 'github-slugger';
import { format } from 'date-fns';

const BlogLayout = ({ blog, variant }) => {
	if (variant === 1) {
		return (
			<div className='inline-block h-full overflow-hidden group rounded-xl'>
				<div
					className='absolute top-0 left-0 bottom-0 right-0
              bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
              '
				/>
				<Image
					src={blog.image.filePath.replace('../public', '')}
					placeholder='blur'
					blurDataURL={blog.image.blurhashDataUrl}
					alt={blog.title}
					width={blog.image.width}
					height={blog.image.height}
					className='object-cover object-center w-full h-full transition-all duration-300 rounded-xl group-hover:scale-105 ease'
					// sizes='(max-width: 1180px) 100vw, 50vw'
				/>

				<div className='absolute bottom-0 z-20 w-full p-4 xs:p-6 sm:p-10'>
					<Tag
						link={`/categories/${slug(blog.tags[0])}`}
						name={blog.tags[0]}
						className='px-6 text-xs  sm:text-sm py-1 sm:py-2 !border '
					/>
					<Link href={blog.url} className='mt-6'>
						<h2 className='mt-2 text-sm font-bold capitalize xs:text-base sm:text-xl md:text-2xl text-light sm:mt-4'>
							<span
								className='bg-gradient-to-r from-primary to-primary bg-[length:0px_6px] dark:from-secondary/50 dark:to-secondary/50
                  group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
							>
								{blog.title}
							</span>
						</h2>
					</Link>
					<span className='inline-block w-full mt-1 text-xs font-semibold capitalize text-lightOffset sm:text-base'>
						{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
					</span>
				</div>
			</div>
		);
	}

	if (variant === 2) {
		return (
			<div className='grid items-center grid-cols-12 gap-4 group text-dark dark:text-light'>
				<Link
					href={blog.url}
					className='h-full col-span-12 overflow-hidden lg:col-span-4 rounded-xl'
				>
					<Image
						src={blog.image.filePath.replace('../public', '')}
						placeholder='blur'
						blurDataURL={blog.image.blurhashDataUrl}
						alt={blog.title}
						width={blog.image.width}
						height={blog.image.height}
						className='object-cover object-center w-full h-full transition-all duration-300 aspect-square group-hover:scale-105 ease'
						// sizes='(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw'
					/>
				</Link>

				<div className='w-full col-span-12 lg:col-span-8'>
					<span className='inline-block w-full text-xs font-semibold uppercase text-primary dark:text-secondary sm:text-sm'>
						{blog.tags[0]}
					</span>
					<Link href={blog.url} className='inline-block my-1'>
						<h2 className='text-base font-semibold capitalize sm:text-lg'>
							<span
								className='bg-gradient-to-r from-primary/50 dark:from-secondary/50 to-primary/50 dark:to-secondary/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
							>
								{blog.title}
							</span>
						</h2>
					</Link>

					<span className='inline-block w-full text-xs font-semibold capitalize text-gray dark:text-light/50 sm:text-base'>
						{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
					</span>
				</div>
			</div>
		);
	}

	if (variant === 3) {
		return (
			<div className='flex flex-col items-center group text-dark dark:text-light'>
				<Link href={blog.url} className='h-full overflow-hidden rounded-xl'>
					<Image
						src={blog.image.filePath.replace('../public', '')}
						placeholder='blur'
						blurDataURL={blog.image.blurhashDataUrl}
						alt={blog.title}
						width={blog.image.width}
						height={blog.image.height}
						className=' aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 '
						// sizes='(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw'
					/>
				</Link>

				<div className='flex flex-col w-full mt-4'>
					<span className='text-xs font-semibold uppercase text-primary dark:text-secondary sm:text-sm'>
						{blog.tags[0]}
					</span>
					<Link href={blog.url} className='inline-block my-1'>
						<h2 className='text-base font-semibold capitalize sm:text-lg'>
							<span
								className='bg-gradient-to-r from-primary/50 to-primary/50  dark:from-secondary/50
                dark:to-secondary/50
                bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
							>
								{blog.title}
							</span>
						</h2>
					</Link>

					<span className='text-sm font-semibold capitalize text-gray dark:text-light/50 sm:text-base'>
						{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
					</span>
				</div>
			</div>
		);
	}
};

export default BlogLayout;
