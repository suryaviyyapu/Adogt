import React from "react";
import ProfileImageSlide from "./ProfileImageSlide";

function Profile() {
    const animal = {
        status: 1,
        name: "Rio",
        gender: "male",
        breed: "Pug",
        date: "5-5-2021",
        deworming: 1,
        vaccine: 0,
        image: "https://placedog.net/500",
        age: 36,
        moreImages: [
            "https://placedog.net/500",
            "https://placedog.net/500",
            "https://placedog.net/500",
        ],
        myStory:"Rio is a super smart amazing dog with so much love to give. Rio is well trained knows all commands sit, heal, go to your bed, stay on your bed, go to your crate, paw she knows it all. Rio is very protective and so loving g she needs a experienced owner who keeps her in check and loves her.",
        about: [
            "I need a family which can take care of me 🥰",
            "You ask what you get? lots of love ♥",
        ],
        address: "Hyderabad",
        contact: "care@adogt.com",
    };
    return (
        <div>
            <div align="center" className="flex">
                <div className="flex flex-row my-4 ml-12">
                    <div className>
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
                                <spam className="text-lg">{animal.name}</spam>
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
                                <ul type="square">
                                    {animal.about.map((abt) => (
                                        <li className="ml-2" key={abt}>
                                            {abt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <br />
                            <p className="text-lg text-gray-500">Got doubts?</p>
                            <div className="ml-2">
                                <table cellPadding="2">
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
                                                <spam>I got vaccinated 😁</spam>
                                            ) : (
                                                <spam>
                                                    {" "}
                                                    Hope to get vaccinated soon
                                                    🙃
                                                </spam>
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
                                                <spam>
                                                    {" "}
                                                    Done with it baby 😎
                                                </spam>
                                            ) : (
                                                <spam>
                                                    {" "}
                                                    Nah!!! We will plan when we
                                                    get to your home 🙃
                                                </spam>
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
                    <ProfileImageSlide {...animal}/>
                </div>
                <div className="mx-8 font-mono">
                    <p className="text-gray-500 text-lg">My Story</p>
                    <p className="ml-2">{animal.myStory}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
