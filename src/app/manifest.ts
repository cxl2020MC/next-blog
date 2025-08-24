import type { MetadataRoute } from "next";
import blogConfig from "@/blog.config";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: blogConfig.title,
    short_name: blogConfig.title,
    description: blogConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: blogConfig.favicon,
        sizes: "any",
      },
    ],
  };
}