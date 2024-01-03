/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lanyard.cnrad.dev',
        port: '',
        pathname: '**',
      },
    ],
  },
};


module.exports = nextConfig;
