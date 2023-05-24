import Button from "../../../components/Button";
import InfoArea from "../../../components/InfoArea";

export default function HomeBody() {
    return (
        <main>
            <section>

                <InfoArea info="Página inicial" />

                <div className="ms-container">
                    <Button path="/promotion" text="Ver promoção" />
                </div>
            </section>
        </main>
    )
}