/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "back.portfolio.technoplus.dev",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "192.168.155.4",
        port: "8002",
        pathname: "/images/**",
      },
    ],
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
};

export default nextConfig;
