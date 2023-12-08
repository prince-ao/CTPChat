/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
}

/*
module.exports = {
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
  }
*/