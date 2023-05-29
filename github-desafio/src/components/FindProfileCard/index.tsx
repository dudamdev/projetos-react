/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import * as ghService from "../../services/gh-service"
import "./styles.css";
import { UserGHDTO } from "../../models/userGH";
import ProfileCard from "../ProfileCard";

type FormData = {
    ghUser: string;
}

export default function FindProfileCard() {
    const [formData, setFormData] = useState<FormData>({
        ghUser: '',
    });

    function handleInputChange(event: any) {
        const value = event.target.value;
        setFormData({ ghUser: value });
    }

    const [userGH, setUserGH] = useState<UserGHDTO | undefined>();

    function handleFormSubmit(event: any) {
        event.preventDefault();
        ghService.findUser(formData.ghUser)
            .then(response => {
                setUserGH(response.data)
            })
            .catch((error) => {
                console.log(error);
                setUserGH(undefined)
            })
    }


    return (
        <main>
            <div className="gh-container find-card">
                <h2>Encontre um perfil Github</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            name="ghUser"
                            value={formData.ghUser}
                            type="text"
                            placeholder="Usuário GitHub"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Encontrar</button>
                    </div>
                </form>
            </div>
            <div >
                {userGH ? (
                    <div className="profile-card">
                        <ProfileCard userGH={userGH} />
                    </div>
                ) : (
                    <div className="gh-container profile-not-find">Perfil não encontrado</div>
                )}
            </div>
        </main>
    );
}
