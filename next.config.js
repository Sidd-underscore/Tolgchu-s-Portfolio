const { get } = require('@vercel/edge-config');

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
  redirects() {
    try {
      return get('redirects');
    } catch {
      return [];
    }
  },
};


module.exports = nextConfig;