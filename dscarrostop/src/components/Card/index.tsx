import "./styles.css"
import carImg from "../../assets/car-card 1.png"


export default function Card() {
    return (
        <div className="dsct-card">
            <img src={carImg} alt="Car" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    )
}