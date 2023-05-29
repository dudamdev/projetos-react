import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
    text: string,
    to: string,
}

export default function Button({ to, text }: Props) {
    return (
        <Link to={to}>
            <button>{text}</button>
        </Link>
    )
}