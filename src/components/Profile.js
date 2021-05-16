import React, {useState, useEffect} from "react";
import ProfileImageSlide from "./ProfileImageSlide";
import axios from 'axios';
import { useParams } from "react-router";

function Profile() {
    const [animal, setPet] = useState({})
    const { id } = useParams();
    useEffect(() => {
        const URL = `http://127.0.0.1:8000/api/${id}/`
        axios.get(URL)
        .then(res => {
            setPet(res.data)
        })
    },[id])
    return (
        <div>
            <div align="center" className="flex">
                <div className="flex flex-row my-4 ml-12">
                    <div>
                        <img
                            className="rounded-full w-64 h-64 overflow-auto"
                            src={animal.image}
                            alt="Profile"
                        />
                        <p className="m-2 font-mono">Posted on {animal.date}</p>
                        <div className="text-xl font-bold">
                            {animal.status ? (
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
                                <span className="text-lg">{animal.name}</span>
                            </p>
                            <p>
                                I'm a {animal.age} months old healthy{" "}
                                {animal.gender} {animal.breed} 🐕
                            </p>
                            <br />
                            <div>
                                <p className="text-lg text-gray-500">
                                    Requirements
                                </p>
                                    {animal.about}
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
                                            {animal.vaccine ? (
                                                <span>I got vaccinated 😁</span>
                                            ) : (
                                                <span>
                                                    {" "}
                                                    Hope to get vaccinated soon
                                                    🙃
                                                </span>
                                            )}
                                        </td>
                                        <td>:{animal.name}</td>
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
                                            {animal.deworming ? (
                                                <span>
                                                    {" "}
                                                    Done with it baby 😎
                                                </span>
                                            ) : (
                                                <span>
                                                    {" "}
                                                    Nah!!! We will plan when we
                                                    get to your home 🙃
                                                </span>
                                            )}
                                        </td>
                                        <td>:{animal.name}</td>
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
                                            {animal.address}
                                        </td>
                                        <td>:{animal.name}</td>
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
                            <p className="ml-2">Contact {animal.contact}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div>
                    {/* <ProfileImageSlide props={animal.more_images} /> */}
                </div>
                <div className="mx-8 font-mono">
                    <p className="text-gray-500 text-lg">My Story</p>
                    <p className="ml-2">{animal.my_story}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
