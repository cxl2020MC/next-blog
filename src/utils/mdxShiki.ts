import rehypeShikiFromHighlighter from '@shikijs/rehype/core'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'


const jsEngine = createJavaScriptRegexEngine()

const highlighter = await createHighlighterCore({
    themes: [
        import('shiki/themes/vitesse-light.mjs'),
        import('shiki/themes/vitesse-dark.mjs'),
    ],
    langs: [
        import('shiki/langs/javascript.mjs'),
    ],
    engine: jsEngine
})


const mdxShikiPlugin =
    [rehypeShikiFromHighlighter, highlighter, {
        themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        }
    }]



export default mdxShikiPlugin as any


