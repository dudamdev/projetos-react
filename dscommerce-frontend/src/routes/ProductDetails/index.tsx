import "./styles.css";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductCard from "../../components/ProductCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "TV muito bonita",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletronicos"
        },
        {
            id: 3,
            name: "Televisão"
        },
        {
            id: 4,
            name: "Importados"
        },
    ]
}

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary text="comprar" />
                        <ButtonInverse text="início" />
                    </div>
                </section>
            </main>
        </>
    )
}