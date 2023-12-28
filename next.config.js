/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
};

module.exports = withContentlayer({ ...nextConfig });
