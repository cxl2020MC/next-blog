import Author from "./author"
import "./css/aside.css"

export default function Aside({ children }: { children?: React.ReactNode}) {
    return (
        <aside className="">
            <Author />
            {children}
        </aside>
    )
}