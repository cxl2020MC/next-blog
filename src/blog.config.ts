import type { BlogConfig } from './types/blog.config'


const blogConfig:BlogConfig = {
    api: 'https://api.blog.cxl2020mc.top',
    title: '陈鑫磊的博客',
    description: '一个记录我学习工作和思考的博客',
    author: {
        avatar: 'https://cxl2020mc-1304820025.file.myqcloud.com/avatar.svg',
        favicon: 'https://cxl2020mc-1304820025.file.myqcloud.com/avatar.svg',
        name: '陈鑫磊',
        // description: '一个热爱编程的少年',
        bio: '当你有机会做出选择的时候，不要让自己后悔。',
        github: 'https://github.com/cxl2020MC',
    },
    repo: 'https://github.com/cxl2020MC/next-blog',
    nav: {
        links: [
            {
                name: '友链',
                icon: 'fa6-solid:link',
                link: '/links'
            },
            {
                name: '关于',
                icon: 'fa6-solid:address-card',
                link: '/about'
            },
            {
                name: '归档',
                icon: 'fa6-solid:box',
                link: '/archives'
            },
            {
                name: '标签',
                icon: 'fa6-solid:tags',
                link: '/tags'
            },
        ]
    },
    twikoo: {
        envId: "https://twikoo.cxl2020mc.top"
    },
    codeBlock: {
        themes: [],
        langTranslate:{
            javascript: "JavaScript"
        }
    },
}

export default blogConfig