import "./css/footer.css"
import blogConfig from "@/blog.config";


export default function Footer() {
    return (<footer>
        <div className="footer-info">
            <p>© 2024 - Now {blogConfig.author.name} All rights reserved.</p>
            <p>Powered by <a href="https://nextjs.org" target="_blank">Next.js</a></p>
        </div>
    </footer>)
}