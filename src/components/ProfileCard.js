import React from 'react'

const animal = {
    name:"Rio",
    age:"23",
    address:"Hyderabad, TS, INDIA"
}

function ProfileCard() {
    return (
        <div className="w-1/3">
            <div className="m-2 bg-white flex flex-row rounded-sm shadow-lg">
                <div>
                    <img className="w-36 h-36 rounded-sm overflow-auto" src="https://placedog.net/500" alt="Animal"/>
                </div>
                <div className="p-2 font-mono">
                    <p className="text-xl py-1">{animal.name}</p>
                    <p className="text-lg py-1">{animal.age} months old</p>
                    <p className="text-lg py-1">{animal.address}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
