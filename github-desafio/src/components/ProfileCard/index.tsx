import { UserGHDTO } from "../../models/userGH";
import "./styles.css";

type Props = {
    userGH: UserGHDTO;
}

export default function ProfileCard({ userGH }: Props) {
    return (
        <div className="gh-container profile-card-container">
            <div className="profile-card-img-container">
                <img src={userGH.avatar_url} alt={userGH.name} />
            </div>
            <div className="profile-card-info-container">
                <div className="heading-container">
                    <h3>Informações</h3>
                </div>
                <div className="all-info-container">
                    <div className="info-container">
                        <p><span>Perfil:</span> <a href={userGH.html_url} target="_blank">{userGH.html_url}</a></p>
                    </div>
                    <div className="info-container">
                        <p><span>Seguidores:</span> {userGH.followers}</p>
                    </div>
                    <div className="info-container">
                        <p><span>Localidade:</span> {userGH.location}</p>
                    </div>
                    <div className="info-container">
                        <p><span>Nome:</span> {userGH.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}