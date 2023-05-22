import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductCard from "../../../components/ProductCard";
import * as productService from "../../../services/product-service"
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
    const params = useParams()
    const product = productService.findById(Number(params.productId))
    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <ProductCard product={product} />

                }
                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="comprar" />
                    <Link to="/">
                        <ButtonInverse text="início" />
                    </Link>
                </div>
            </section>
        </main>
    )
}