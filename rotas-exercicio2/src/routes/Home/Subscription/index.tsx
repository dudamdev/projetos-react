import "./styles.css"
import Button from "../../../components/Button";
import InfoArea from "../../../components/InfoArea";

export default function Subscription() {
    return (
        <main>
            <section className="subscription ms-container">
                <h1>Faça sua inscrição!</h1>

                <InfoArea info="Página de inscrição" />

                <div className="ms-container">
                    <Button path="/promotion" text="Ver promoção" />
                </div>
            </section>
        </main>
    )
}