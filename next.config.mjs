/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/helen-keller' : '',
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    images: {
      loader: "custom",
      loaderFile: './ImageLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
    ],
  },
  };
  
  export default nextConfig;
