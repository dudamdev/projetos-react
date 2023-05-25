import { Outlet } from "react-router-dom";
import ProductsNav from "../../../components/ProductsNav";

export default function Products() {
    return (
        <section>
            <ProductsNav />
            <Outlet />
        </section>
    )
}