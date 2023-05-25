import "./styles.css"

type Props = {
    info: string;
}

export default function InfoArea({ info }: Props) {
    return (
        <div className="info-area ms-container">
            <h2>{info}</h2>
        </div>
    )
}