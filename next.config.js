/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  // basePath: '/next-test',

  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:4200/images/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/car/1',
        destination: '/car/2',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
