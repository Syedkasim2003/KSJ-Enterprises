/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/enterprises',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/enterprises',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

