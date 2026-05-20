import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/josephterrell" : "",
  assetPrefix: isProd ? "/josephterrell/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
