import "./styles.css"

type Props = {
    info: string;
}

export default function InfoArea({ info }: Props) {
    return (
        <div className="ms-container info-area">
            <h2>{info}</h2>
        </div>
    )
}