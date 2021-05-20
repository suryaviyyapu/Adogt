import React, { useState, useEffect } from "react";
import ProfileImageSlide from "./ProfileImageSlide";
import { useParams } from "react-router";
import { PetAPI } from "../api/api";
import SimilarPets from "./SimilarPets";

interface Props {}

interface ParamsProps {
    id: string;
}
export const Profile: React.FC<Props> = () => {
    const [pet, setPet] = useState({
        id: 0,
        status: false,
        created_on: "",
        name: "",
        gender: false,
        breed: "",
        age: 0,
        deworming: false,
        vaccine: false,
        image: "",
        more_images: "",
        my_story: "",
        about: "",
        address: "",
        contact: "",
    });
    const [error, setIsError] = useState(false);
    const { id } = useParams<ParamsProps>();
    useEffect(() => {
        PetAPI.getAPet(id)
            .then((data) => {
                setPet({
                    ...data,
                    status: data.status,
                    created_on: data.created_on,
                    name: data.name,
                    gender: data.gender,
                    breed: data.breed,
                    age: data.age,
                    deworming: data.deworming,
                    vaccine: data.vaccine,
                    image: data.image,
                    more_images: data.more_images,
                    my_story: data.my_story,
                    about: data.about,
                    address: data.address,
                    contact: data.contact,
                });
            })
            .catch((error) => {
                setIsError(true);
            });
    }, []);
    return (
        <div>
            <div className="text-center flex">
                {error && <p>Error occurred</p>}
                <div className="flex flex-row my-4 ml-12">
                    <div>
                        <img
                            className="rounded-full w-64 h-64 overflow-auto"
                            src={pet.image}
                            alt="Profile"
                        />
                        <p className="m-2 font-mono">
                            Posted on {pet.created_on}
                        </p>
                        <div className="text-xl font-bold">
                            {pet.status ? (
                                <p className="bg-green-600 text-center">
                                    Available for adoption ✔
                                </p>
                            ) : (
                                <p className="bg-red-600 text-center">
                                    Already Adopted 😊
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="m-4 ml-12 border-l-4 bg-gray-800 h-96"></div>
                    <div className="m-4 text-left font-mono">
                        <div>
                            <p>Hi👋</p>
                            <p>
                                My name is{" "}
                                <span className="text-lg">{pet.name}</span>
                            </p>
                            <p>
                                I'm a {pet.age} months old healthy {pet.gender}{" "}
                                {pet.breed} 🐕
                            </p>
                            <br />
                            <div>
                                <p className="text-lg text-gray-500">
                                    Requirements
                                </p>
                                {pet.about}
                            </div>
                            <br />
                            <p className="text-lg text-gray-500">Got doubts?</p>
                            <div className="ml-2">
                                <table cellPadding="2">
                                    <tbody>
                                        <tr className="m-2">
                                            <td>You:</td>
                                            <td className=" bg-gray-400 rounded-lg p-2">
                                                Are you vaccinated?
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-right p-2">
                                                {pet.vaccine ? (
                                                    <span>
                                                        I got vaccinated 😁
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {" "}
                                                        Hope to get vaccinated
                                                        soon 🙃
                                                    </span>
                                                )}
                                            </td>
                                            <td>:{pet.name}</td>
                                        </tr>
                                        <tr>
                                            <td>You:</td>
                                            <td className=" bg-gray-400 rounded-lg p-2">
                                                What about de-worming?
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-right p-2">
                                                {pet.deworming ? (
                                                    <span>
                                                        {" "}
                                                        Done with it baby 😎
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {" "}
                                                        Nah!!! We will plan when
                                                        we get to your home 🙃
                                                    </span>
                                                )}
                                            </td>
                                            <td>:{pet.name}</td>
                                        </tr>
                                        <tr>
                                            <td>You:</td>
                                            <td className=" bg-gray-400 rounded-lg p-2">
                                                Where can I find you?
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-right p-2">
                                                {pet.address}
                                            </td>
                                            <td>:{pet.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />
                        <div>
                            <p className="text-lg text-gray-500">
                                Wanna know more about me?
                            </p>
                            <p className="ml-2">Contact {pet.contact}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row ml-12">
                <div>
                    <ProfileImageSlide images={pet.more_images} />
                </div>
                <div className="mx-8 font-mono">
                    <p className="text-gray-500 text-lg">My Story</p>
                    <p className="ml-2">{pet.my_story}</p>
                </div>
            </div>
            <div className="flex flex-col ml-12 my-4">
                <p className="text-xl font-mono text-gray-500 my-2">
                    You might like
                </p>
                <SimilarPets breed={pet.breed} />
            </div>
        </div>
    );
};

export default Profile;
