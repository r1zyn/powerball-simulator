/** @type {import("next").NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === "production" ? "/powerball-simulator" : "/",
    basePath: process.env.NODE_ENV === "production" ? "/powerball-simulator" : "",
    reactStrictMode: true,
    images: {
        unoptimized: true, // Since we don't use next/image, we can disable this
    },
    swcMinify: true
};

module.exports = nextConfig;
