import React from 'react'

interface Props {
    //To specify a field as optional
    // Example
    //optional?: boolean;
    name: string;
    age: number;
    address: string;
    image: string;

}

export const ProfileCard: React.FC<Props> = ({
 name,
 age,
 address,
 image
}) => {
    return (
        <div className="w-1/3">
            <div className="m-2 bg-white flex flex-row rounded-sm shadow-lg">
                <div>
                    <img className="w-36 h-36 rounded-sm overflow-auto" src={image} alt="Animal"/>
                </div>
                <div className="p-2 font-mono">
                    <p className="text-xl py-1">{name}</p>
                    <p className="text-lg py-1">{age} months old</p>
                    <p className="text-lg py-1">{address}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard
