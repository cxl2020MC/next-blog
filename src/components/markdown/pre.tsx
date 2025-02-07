import React from "react";


export default function Pre({ children, ...other }: { children: React.ReactElement }) {
    if (children.props) {
        console.log((children.props as {className: string }).className)
    }
    return (
        <div className="code">
            <pre {...other}>{children}</pre>
        </div>

    )
}