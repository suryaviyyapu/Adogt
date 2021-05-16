import React from 'react'

function ProfileCard(animal) {
    return (
        <div className="w-1/3">
            <div className="m-2 bg-white flex flex-row rounded-sm shadow-lg">
                <div>
                    <img className="w-36 h-36 rounded-sm overflow-auto" src={animal.pet.image} alt="Animal"/>
                </div>
                <div className="p-2 font-mono">
                    <p className="text-xl py-1">{animal.pet.name}</p>
                    <p className="text-lg py-1">{animal.pet.age} months old</p>
                    <p className="text-lg py-1">{animal.pet.address}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
