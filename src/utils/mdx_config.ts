import rehypeShikiFromHighlighter from '@shikijs/rehype/core'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'


const jsEngine = createJavaScriptRegexEngine()

const highlighter = await createHighlighterCore({
    themes: [
        import('shiki/themes/vitesse-light.mjs')
    ],
    langs: [
        import('shiki/langs/javascript.mjs'),
    ],
    engine: jsEngine
})