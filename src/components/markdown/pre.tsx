import React from "react";


export default function Pre({ children, ...other }: { children: React.ReactNode }) {
    return (
        <div className="code">
            <pre {...other}>{children}</pre>
        </div>

    )
}