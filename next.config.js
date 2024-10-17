/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        }
      ],
      deviceSizes: [
        320,
        768,
        1024
      ]
    },
  };
  
  module.exports = nextConfig;  