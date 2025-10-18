import { type TocItem } from "remark-flexible-toc";


export default function TableOfContents(toc: TocItem[]) {
  return (
    <div className="toc">
      <ul>
        {toc.map((item: TocItem) => (
          <li key={item.href}>
            <a href={item.href} style={{textIndent: `${item.depth - 1}em`}}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}