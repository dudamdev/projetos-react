/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { Link } from "react-router-dom";
import QueryLink from "../../components/QueryLink";
import HomeIcon from "../../assets/home.svg"

export default function Header() {
    return (
        <header >
            <div className="ms-container header-container">
                <Link to="/">
                    <img src={HomeIcon} alt="Home" />
                </Link>
                <nav>

                    <QueryLink className={({ isActive }: any) => isActive ? "nav-link-bold" : "nav-link-normal"} to="/home"> Início</QueryLink>
                    <QueryLink className={({ isActive }: any) => isActive ? "nav-link-bold" : "nav-link-normal"} to='/products'>Produtos</QueryLink>
                    <QueryLink className={({ isActive }: any) => isActive ? "nav-link-bold" : "nav-link-normal"} to='/about-us'>Sobre Nós</QueryLink>

                </nav>
            </div>
        </header>
    )
}