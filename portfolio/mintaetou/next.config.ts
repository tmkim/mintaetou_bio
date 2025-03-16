/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dankbankbucket.s3.amazonaws.com',
        pathname: '/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/dankbank_back',
        destination: 'https://18.226.169.139/dankbank_back',
      },
    ]
  },
};

module.exports = nextConfig;
