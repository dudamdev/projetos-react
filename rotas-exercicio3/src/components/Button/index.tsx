import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
    path: string,
    text: string,
}

export default function Button({ path, text }: Props) {
    return (

        <div className="button">
            <Link to={path} >
                {text}
            </Link>
        </div>


    )
}