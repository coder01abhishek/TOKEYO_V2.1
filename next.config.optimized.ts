import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  // Enable compression
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Enable SWC minification
  swcMinify: true,
  // Optimize package imports
  modularizeImports: {
    '@tsparticles/react': {
      transform: '@tsparticles/react/dist/esm/{{member}}',
    },
    'framer-motion': {
      transform: 'framer-motion/dist/esm/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/{{member}}',
    },
  },
};

export default nextConfig;
