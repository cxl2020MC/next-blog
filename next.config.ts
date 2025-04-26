import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    transpilePackages: ['next-mdx-remote'],
    // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        // 禁用图像优化
        unoptimized: true,
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'cxl2020mc-1304820025.file.myqcloud.com',
        //     }
        // ]
    },
};


export default nextConfig;
