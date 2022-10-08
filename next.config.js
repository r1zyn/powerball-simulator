/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/powerball-simulator",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    swcMinify: true
};

module.exports = nextConfig;
