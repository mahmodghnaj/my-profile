/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
