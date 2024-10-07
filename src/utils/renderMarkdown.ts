import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
// import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeShiki from '@shikijs/rehype'

import { unified } from 'unified'

const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    // .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeShiki, {
        themes: {
            // light: 'catppuccin-latte',
            // dark: 'catppuccin-mocha',
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },        
    })
    .use(rehypeStringify)

export default async function renderMarkdown(markdown: string) {
    const file = await processor.process(markdown)
    return String(file)
}
