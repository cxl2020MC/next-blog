"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { toast } from 'sonner';

export default function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 获取data-code属性中的代码
    const textToCopy = event.currentTarget.getAttribute("data-code");
    if (textToCopy) {
      try {
        // 使用Clipboard API复制文本
        await navigator.clipboard.writeText(textToCopy);
        // toast.success('复制成功');
        setCopied(true);
        toast.success('复制成功');
        // 可选：给用户一些反馈
        setTimeout(() => setCopied(false), 3000); // 复制成功提示3秒后消失
      } catch (err) {
        console.error("无法复制文本: ", err);
      }
    }
  };

  return (
    <button
      className="code-copy"
      data-code={code}
      title="点击复制代码"
      onClick={copyCode}
    >
      <Icon icon={copied ? "fa6-solid:circle-check" : "fa6-solid:copy"} />
    </button>
  );
}
