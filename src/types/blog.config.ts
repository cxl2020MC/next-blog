export interface BlogConfig {
    api: string;
    title: string;
    description: string;
    author: {
        avatar: string;
        favicon: string;
        name: string;
        bio: string;
        github: string;
    };
    repo: string;
    nav: {
        links: {
            name: string;
            icon: string;
            link: string;
        }[];
    };
    twikoo: {
        envId: string;
    };
    codeBlock: {
        themes: string[];
        langTranslate: { [key: string]: string };
    };
}
