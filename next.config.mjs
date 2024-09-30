/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
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
