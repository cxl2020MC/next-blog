"use client";
import blogConfig from "@/blog.config";
import { useEffect, useState } from "react";

export default function Comment() {
  const [loadingStatus, setLoadingStatus] = useState<"loading" | "error">(
    "loading"
  );

  useEffect(() => {
    if (blogConfig.twikoo) {
      import("twikoo")
        .then(({ default: init }) => {
          init({
            envId: blogConfig.twikoo?.envId!,
            el: "#tcomment",
          });
        })
        .catch((error) => {
          setLoadingStatus("error");
          console.error(`Failed to load twikoo: ${error}`);
        });
    }
  });

  if (blogConfig.twikoo) {
    return (
      <div id="tcomment">
        {loadingStatus === "loading" && <div>正在加载评论...</div>}
        {loadingStatus === "error" && <div>评论加载失败</div>}
      </div>
    );
  }
}
