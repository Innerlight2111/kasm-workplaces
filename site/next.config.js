/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'kasm-workplaces',
    description: 'The househill custom workplace registry.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/Innerlight2111/kasm-workplaces/',
    contactUrl: 'https://github.com/Innerlight2111/kasm-workplaces/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
