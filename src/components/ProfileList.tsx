import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";
import {PetAPI} from "../api/api";
import {PetInterface} from "../modals/pet.interface";

interface Props {

}

const ProfileList: React.FC<Props> = () => {
    const [Pets, setPets] = useState<PetInterface[]>([]);
    const [error, setIsError] = useState(false);
    useEffect(() => {
        PetAPI.getPets()
            .then((data) => {
                setPets(data);
            })
            .catch((err) => {
                setIsError(err);
            })
    }, [])
    return (
        <div>
            {error && <p>Error occurred </p>}
            {
                Pets.map(pet => (
                    <Link to={`pet/${pet.id}/`} key={pet.id}>
                        <ProfileCard name={pet.name} age={pet.age} address={pet.address} image={pet.image}/>
                    </Link>
                ))
            }

        </div>
    );
}

export default ProfileList;
