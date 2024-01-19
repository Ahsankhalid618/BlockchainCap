/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.coingecko.com"],
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    // Use externals to exclude 'pino-pretty'
    config.externals = config.externals || {};
    config.externals.push('pino-pretty');

    return config;
  },
};

module.exports = nextConfig;
