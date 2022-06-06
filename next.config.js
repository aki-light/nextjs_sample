/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix : process.env.GITHUB_PAGES ? "/nextjs_sample/" : ""
}

module.exports = nextConfig
