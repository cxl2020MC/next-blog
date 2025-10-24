import { type TocItem } from "remark-flexible-toc";
import toccss from './css/toc.module.css'


export default function TableOfContents({ toc }: { toc: TocItem[] }) {
  console.debug(toc)
  return (
    <div className={`${toccss.toc} toc card`}>
      <h3 className="card-title">目录</h3>
      <ul>
        {toc.map((item: TocItem) => (
          <li key={item.href}>
            <a href={item.href} style={{ paddingInlineStart: `${item.depth - 2}em` }}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}