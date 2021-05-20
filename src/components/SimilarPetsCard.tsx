import React from 'react';

interface Props {
    name: string;
    age: number;
    gender: boolean
    image: string;
}

const SimilarPetsCard: React.FC<Props> = ({name, age, gender, image}) => {
    return (
        <div className="m-4 rounded-b-md shadow-md">
            <div>
                <img
                    className="h-32 w-40"
                    src={image}
                    alt="pet"/>
            </div>
            <div>
                <p>{name}</p>
                <p>{age} months</p>
                {gender ? <p>Female</p>: <p>Male</p>}
            </div>
        </div>
    )
}

export default SimilarPetsCard;