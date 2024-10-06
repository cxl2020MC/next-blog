import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
// import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeShiki from '@shikijs/rehype'

import { unified } from 'unified'



export default async function renderMarkdown(markdown: string) {
    const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    // .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShiki, {
        themes: {
            light: 'catppuccin-latte',
            dark: 'catppuccin-mocha'
        },
        inLine: "tailing-curly-colon",
        
    })
    .use(rehypeStringify)

    const file = await processor.process(markdown)
    return String(file)
}