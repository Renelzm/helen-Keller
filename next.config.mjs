/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/renelzm.github.io' : '',
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
    ],
  },
  };
  
  export default nextConfig;
