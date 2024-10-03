/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.coingecko.com', 'alternative.me', 'www.gravatar.com', 'coin-images.coingecko.com'],
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    config.externals = config.externals || {};
    config.externals.push('pino-pretty');

    return config;
  },
};

module.exports = nextConfig;
