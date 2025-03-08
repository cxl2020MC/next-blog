import React from "react";
import { codeToHtml } from 'shiki'

import CodeCopyButton from "./copybtn";
import { codeBlockLangTranslate } from "@/blog.config";


export default async function Pre({ children, ...other }: { children: React.ReactElement }) {
    console.debug(other)
    const lang = (children.props as { className: string }).className?.split('-')[1] || 'plaintest'
    const code = (children.props as { children: string }).children
    console.debug(lang)
    console.debug(code)
    const new_codelang = codeBlockLangTranslate[lang] || lang
    const html = await codeToHtml(code, {
        lang: lang,
        themes: {
            'light': 'material-theme-lighter',
            'dark': 'material-theme-ocean'
        },
    })
    return (
        <div className="code-block-container">
            <div className="code-block-header">
                <div className="code-lang">{new_codelang}</div>
                <div className="code-control">
                    <CodeCopyButton code={code} />
                </div>
            </div>
            <div className="code" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>

    )
}



