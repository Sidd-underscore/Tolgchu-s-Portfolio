/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lanyard.cnrad.dev',
        port: '',
        pathname: '**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};


module.exports = nextConfig;
