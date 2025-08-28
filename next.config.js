/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com'
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co'
      }
    ]
  }
};

module.exports = nextConfig;