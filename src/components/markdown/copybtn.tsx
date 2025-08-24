"use client";
import { Icon } from "@iconify/react";
import { toast } from 'sonner';

export default function CodeCopyButton({ code }: { code: string }) {
  const copyCode = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 获取data-code属性中的代码
    const textToCopy = event.currentTarget.getAttribute("data-code");
    if (textToCopy) {
      try {
        // 使用Clipboard API复制文本
        await navigator.clipboard.writeText(textToCopy);
        toast.success('复制成功');
      } catch (err) {
        console.error("无法复制文本: ", err);
        toast.error('复制失败');
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
      <Icon icon="fa6-solid:copy" />
    </button>
  );
}
