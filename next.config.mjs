/** @type {import('next').NextConfig} */
const nextConfig = {
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
