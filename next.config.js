/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.countryflags.com',
                pathname: '/thumbs/united-states-of-america/flag-400.png',
            },
            {
                protocol: 'https',
                hostname: 'cdn.countryflags.com',
                pathname: '/thumbs/turkey/flag-400.png',
            },
        ]
    }
}

module.exports = nextConfig
