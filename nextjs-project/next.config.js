/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org'], // Para as fotos de Einstein e Michelle
  },
}

module.exports = nextConfig
