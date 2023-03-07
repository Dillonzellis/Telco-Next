/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev3.growthbydesign.org",
        // pathname: "wp-content/uploads/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
