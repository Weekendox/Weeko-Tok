/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "i.imgur.com",
      "i.redd.it",
      "ytimg.com",
      "yt3.ggpht.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
