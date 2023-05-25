import Button from "../../../components/Button";
import InfoArea from "../../../components/InfoArea";

export default function Subscription() {
    return (
        <main>
            <section>

                <InfoArea info="Página de inscrição" />

                <div className="ms-container">
                    <Button path="/promotion" text="Ver promoção" />
                </div>
            </section>
        </main>
    )
}