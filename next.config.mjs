/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_BOOKS_API_KEY: process.env.GOOGLE_BOOKS_API_KEY,
    },
};

export default nextConfig;
