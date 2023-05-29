import Button from "../../../components/Button"
import "./styles.css"

export default function HomeBody() {
    return (
        <main>
            <section className="gh-container home-section">
                <div>
                    <h2>Desafio GitHub API</h2>
                    <h3>DevSuperior - Escola de programação</h3>
                </div>
                <Button text="Começar" to="/before" />
            </section>
        </main>
    )
}