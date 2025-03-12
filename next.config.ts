import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  //distDir: "build", // Use a relative path without "/"
  eslint: {
    ignoreDuringBuilds: true, // Ignores linting errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
}

export default nextConfig
