/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  },
  basePath: "/SwiftCare-Platform-WebApp",
  assetPrefix: "/SwiftCare-Platform-WebApp"
};

export default nextConfig;

