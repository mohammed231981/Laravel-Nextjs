/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.matt.nl', 'lh3.googleusercontent.com',]
      },
      experimental: {
        serverComponentsExternalPackages: ['cloudinary']
      },
      pageExtensions: ['ts', 'tsx']
}

module.exports = nextConfig
