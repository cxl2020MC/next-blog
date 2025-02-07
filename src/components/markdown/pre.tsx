import React from "react";


export default function Pre({ children, ...other }: { children: React.ReactElement }) {

    console.log((children.props as { className: string }).className)

    return (
        <div className="code">
            <pre {...other}>{children}</pre>
        </div>

    )
}