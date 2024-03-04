/** @type {import('next').NextConfig} */
const nextConfig = {  compiler: {
    relay: {
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
    },
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },};

export default nextConfig;
