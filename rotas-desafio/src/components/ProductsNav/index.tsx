/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryLink from "../QueryLink";
import "./styles.css";

export default function ProductsNav() {
    return (
        <div className="ms-container prod-nav-container">
            <nav>
                <QueryLink className={({ isActive }: any) => isActive ? "product-nav-bold" : "product-nav-normal"} to="/products/computers"> Computadores</QueryLink>
                <QueryLink className={({ isActive }: any) => isActive ? "product-nav-bold" : "product-nav-normal"} to='/products/eletronics'>Eletrônicos</QueryLink>
                <QueryLink className={({ isActive }: any) => isActive ? "product-nav-bold" : "product-nav-normal"} to='/products/books'>Livros</QueryLink>

            </nav>
        </div>
    )
}