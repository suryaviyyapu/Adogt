import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

import { retrievePets } from "../actions/adogt";
import axios from "axios";

const ProfileList = () => {
    const [Pets, setPets] = useState([]);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    // const pets = useSelector((state) => state.pets);

    // const dispatch = useDispatch();

    // useEffect(() => {
        // dispatch(retrievePets());
    // }, [dispatch]);
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/listing/`)
      .then(res => {
        setPets(res.data);
      })
    }, [])

    return (
        <div>
            {
                Pets.map(pet => (
                    <Link to={`listing/${pet.id}/`} key={pet.id}><ProfileCard pet={pet}/></Link>
                ))
            }
            
        </div>
    );
};

export default ProfileList;
