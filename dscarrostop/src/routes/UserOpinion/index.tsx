import Depoiments from "../../components/Depoiments";
import "./styles.css";

export default function UserOpinion() {
    return (
        <section className="dsct-user-opinion-section">
            <h2>O que estão dizendo</h2>
            <div className="dsct-container dsct-depoiments-container">
                <Depoiments />
                <Depoiments />
                <Depoiments />
                <Depoiments />
                <Depoiments />
            </div>
        </section>
    );
}