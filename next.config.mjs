

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cxl2020mc-1304820025.file.myqcloud.com',
            }
        ]
    }
};


export default nextConfig;
