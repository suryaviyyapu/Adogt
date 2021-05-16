import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

import axios from "axios";

const ProfileList = () => {
    const [Pets, setPets] = useState([]);

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
