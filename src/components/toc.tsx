import { type TocItem } from "remark-flexible-toc";


export default function TableOfContents(toc: TocItem[]) {
  return (
    <div className="toc">
      <ul>
        {toc.map((item: any) => (
          <li key={item.id}>
            <a href={`#${item.id}`} style={{textIndent: `${item.depth - 1}em`}}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}