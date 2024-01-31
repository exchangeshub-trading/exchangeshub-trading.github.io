/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
}

export default nextConfig
