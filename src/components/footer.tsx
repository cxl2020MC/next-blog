import "@/app/css/footer.css"
import blogConfig from "@/blog.config";


export default function Footer() {
    return (<footer>
        <div className="footer-info">
            <p>© 2024 {blogConfig.author.name} All rights reserved.</p>
        </div>
    </footer>)
}