/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: { unoptimized: true },
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
