/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['source.unsplash.com', 'firebasestorage.googleapis.com'],
    },
    /* config options here */
};

module.exports = nextConfig;
