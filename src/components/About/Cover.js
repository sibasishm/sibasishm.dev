import Image from 'next/image';
import React from 'react';
import LottieAnimation from '../LottieAnimation';
// import profileCharacter from '../../../public/character.png';

const CoverSection = () => {
	return (
		<section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
			<div className='flex justify-center w-full h-full border-r-2 border-solid md:w-1/2 border-dark dark:border-light'>
				<LottieAnimation src='/about-me.lottie' />
			</div>
			<div className='flex flex-col items-start justify-center w-full px-5 pb-10 text-left md:w-1/2 xs:p-10 lg:px-16'>
				<h2 className='text-4xl font-bold text-center capitalize xs:text-5xl sxl:text-6xl lg:text-left'>
					Dream Big, Work Hard, Achieve More!
				</h2>
				<p className='mt-4 text-base font-medium capitalize'>
					This Mantra Drives My Work As A Passionate Freelancer. I Blend
					Innovative Technology With Timeless Design For Captivating Digital
					Experiences. Inspired By Nature And Literature, I'm A Perpetual
					Learner Embracing Challenges. With Each Project, I Aim To Leave A
					Lasting Impact—One Pixel At A Time.
				</p>
			</div>
		</section>
	);
};

export default CoverSection;
