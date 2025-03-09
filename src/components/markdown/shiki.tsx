import { codeToHtml } from 'shiki'


export default async function Shiki({ code, lang }: { code: string, lang: string }) {
    const html = await codeToHtml(code, {
        lang: lang,
        themes: {
            'light': 'vitesse-light',
            'dark': 'vitesse-dark'
        },
    })
    console.log(`渲染代码块成功: 
    语言：${lang} 
    ${code}
    html: 
    ${html}`)
    return (
        <div className='code' dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}