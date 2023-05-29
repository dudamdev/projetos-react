import { Link } from "react-router-dom"
import "./styles.css"

export default function Header() {
    return (
        <header>
            <Link to="/" className="gh-container">
                <h1>GitHub API</h1>
            </Link>
        </header>
    )
}