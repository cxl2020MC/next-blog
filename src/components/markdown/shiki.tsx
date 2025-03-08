import { codeToHtml } from 'shiki'


export default async function Shiki({ code, lang }: { code: string, lang: string }) {
    const html = await codeToHtml(code, {
        lang: lang,
        themes: {
            'light': 'vitesse-light',
            'dark': 'vitesse-dark'
        },
    })
    console.log(`代码块 (${lang}) `)
    return (
        <div className='code' dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}