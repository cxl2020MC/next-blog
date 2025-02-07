'use client'
import { useState } from 'react';


export default function CodeCopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const copyCode = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // 获取data-code属性中的代码
        const textToCopy = event.currentTarget.getAttribute('data-code');
        if (textToCopy) {
            try {
                // 使用Clipboard API复制文本
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                // 可选：给用户一些反馈
                setTimeout(() => setCopied(false), 2000); // 复制成功提示2秒后消失
            } catch (err) {
                console.error('无法复制文本: ', err);
            }
        }
    };

    return (
        <button className="code-copy" data-code={code} onClick={copyCode}>
            {copied ? '已复制' : '复制代码'}
        </button>
    );
};