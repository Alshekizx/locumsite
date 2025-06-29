// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["app.mployus.co.uk", "app.mployus.ie"],
    minimumCacheTTL: 60, // Cache for at least 60 seconds
  },
};

module.exports = nextConfig;
