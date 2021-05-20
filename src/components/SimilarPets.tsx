import React, {useEffect, useState} from 'react';
import SimilarPetsCard from "./SimilarPetsCard";
import {PetAPI} from "../api/api";
import {PetInterface} from "../modals/pet.interface";

interface Props {
    breed: string;
}
const SimilarPets: React.FC<Props> = ({breed}) => {
    const [pets, setPets] = useState<PetInterface[]>([]);
    useEffect(() => {
        PetAPI.getBreed(breed)
            .then((data) => {
                setPets(data)
            })
    }, [breed]);
    
    return (
        <div>
            <div className="flex flex-row">


                {
                    pets.map( pet => (
                        <div>
                        <SimilarPetsCard name={pet.name} age={pet.age} gender={pet.gender} image={pet.image}/>
                        </div>
                            ))
                }
            </div>
        </div>
    );
};

export default  SimilarPets;