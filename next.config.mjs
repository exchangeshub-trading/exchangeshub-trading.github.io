/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
}

export default nextConfig
