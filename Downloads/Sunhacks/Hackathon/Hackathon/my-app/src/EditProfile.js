import React, { useState, useStateValue, useEffect } from 'react';
import axios from "axios";
import coco from "./assets/coco.jpg";
import spark from "./assets/spark.jpeg"

function EditProfile() {

    
    const [dogs, setDogs] = useState([
        {
            name: "Coco",
            age: "3",
            sex: "F",
            bio: "i like long walks"
        },
    ]);

    function Edit() {
        const [{ user }] = useStateValue();
        axios.patch(`/users/${user.email}`, {
            name: "new name",
            age: "new age",
            sex: "new sex",
            bio: "new bio"
        })
        .then(result=> {
            console.log(result);
        })
        .catch(err => {
            console.log("convo patch error", err);
        });
    }


    return (
        <div className="profile">
            <div className="upperContainer">
                <div className="imageContainer">
                    <img src={coco}  alt="image" height="20%" width="20%" />
                </div>
                {dogs.map(dog => (
                <div className="lowerContainer">
                    <h4>Name: <input name="Name" placeholder={ dog.name } /></h4>
                    <h4>Age: <input name="Name" placeholder={ dog.age } /></h4>
                    <h4>Sex: <input name="Name" placeholder={ dog.sex } /></h4>
                    <h4>Bio: <input name="Name" placeholder={ dog.bio } /></h4>
                    <button onclick={Edit}>Submit</button>
                </div>
                ))}
            </div>

        </div>
    )
}



export default EditProfile;