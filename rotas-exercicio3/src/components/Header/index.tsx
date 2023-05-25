/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { Link } from "react-router-dom";
import QueryLink from "../../components/QueryLink";

export default function Header() {
    return (
        <header >
            <div className="ms-container header-container">
                <Link to="/">
                    <h1>MeuSite</h1>
                </Link>
                <nav>

                    <QueryLink className={({ isActive }: any) => isActive ? "nav-link-bold" : "nav-link-normal"} to="/home"> Início</QueryLink>
                    <QueryLink className={({ isActive }: any) => isActive ? "nav-link-bold" : "nav-link-normal"} to='/promotion'>Promoção</QueryLink>
                    <QueryLink className={({ isActive }: any) => isActive ? "nav-link-bold" : "nav-link-normal"} to='/subscription'>Participar</QueryLink>

                </nav>
            </div>
        </header>
    )
}