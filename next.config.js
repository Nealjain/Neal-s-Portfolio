/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // Increased cache time to 24 hours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Smaller image sizes
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    unoptimized: true, // Disable image optimization for local images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', 
      },
    ],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dilvggvum',
    NEXT_PUBLIC_CLOUDINARY_API_KEY: '241494994687311',
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
  },
  // Optimize images
  webpack(config) {
    // Optimize SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig
