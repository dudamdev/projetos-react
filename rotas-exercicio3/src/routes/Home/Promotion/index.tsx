import Button from "../../../components/Button";
import InfoArea from "../../../components/InfoArea";

export default function Promotion() {
    return (
        <main>
            <section>

                <InfoArea info="Página de promoção" />

                <div className="ms-container">
                    <Button path="/subscription" text="Quero participar" />
                </div>
            </section>
        </main>
    )
}