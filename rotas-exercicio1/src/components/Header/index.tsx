import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
    return (
        <header>
            <Link to="/" className="ms-container">
                <h1>MeuSite</h1>
            </Link>
        </header>
    )
}