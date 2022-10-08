/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === "production" ? "/powerball-simulator" : "/",
    basePath: process.env.NODE_ENV === "production" ? "/powerball-simulator" : "/",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    swcMinify: true
};

module.exports = nextConfig;
