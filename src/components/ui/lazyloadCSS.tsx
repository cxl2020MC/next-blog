import Script from "next/script"

export default function LazyLoadCSS() {
    return (
            <Script>
                {`(function () { 
                const css = document.createElement('link');
                css.rel = 'stylesheet';
                css.href = "https://cxl2020mc-1304820025.file.myqcloud.com/fonts/Mi_Sans/MiSans%20VF/result.css";
                document.head.appendChild(css);
                })();`}
            </Script>
    )
}
