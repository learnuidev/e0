import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverActions: {
    // edit: updated to new key. Was previously `allowedForwardedHosts`
    allowedOrigins: ["http://localhost:3001", "http://localhost:3000"],
  },
};

export default nextConfig;
