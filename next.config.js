/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  image: {
    domains: ["scontent.cdninstagram.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
