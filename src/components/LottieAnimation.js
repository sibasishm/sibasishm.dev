'use client';
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = ({ src }) => {
	return <DotLottiePlayer src={src} autoplay loop></DotLottiePlayer>;
};

export default LottieAnimation;
