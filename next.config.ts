import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "vmg.systems" }],
        destination: "https://www.vmg.systems/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
