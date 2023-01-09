/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ['reqres.in'],
  // },
  experimental:{appDir: true}
}

module.exports = nextConfig

