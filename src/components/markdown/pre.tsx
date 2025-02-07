import React from "react";
import { codeToHtml } from 'shiki'

import CodeCopyButton from "./copybtn";


export default async function Pre({ children, ...other }: { children: React.ReactElement }) {
    console.debug(other)
    const lang = (children.props as { className: string }).className?.split('-')[1] || 'plaintest'
    const code = (children.props as { children: string }).children
    console.debug(lang)
    console.debug(code)
    const html = await codeToHtml(code, {
        lang: lang,
        themes: {
            'light': 'vitesse-light',
            'dark': 'vitesse-dark'
        },
    })
    return (
        <div className="code-block">
            <div className="code-header">
                <div className="code-lang">{lang}</div>
                <div className="code-control">
                    <CodeCopyButton code={code} />
                </div>
            </div>
            <div className="code" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>

    )
}



