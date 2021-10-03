import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
//import database from "./firebase";
import './DogCards.css';

import coco from "./assets/coco.jpg";
import spark from "./assets/spark.jpeg";
import patrick from "./assets/patrick.jpg";
import { rgbToHex } from "@material-ui/core";
import axios from "axios";
import EditProfile from "./EditProfile";


function DogCards() {
    const [dogs, setDogs] = useState([
        {
            name: "Coco",
            age: "3",
            sex: "F",
            url: coco,
            description: "I like long walks on the leash"
        },
        {  
            name: "Spark",
            age: "5",
            sex: "M",
            url: spark,
            description: "I can be grumpy, but if you give me lots of pets I will love you forever and ever and ever and ever"

        },
        {
            name: "Patrick",
            age: "7",
            sex: "M",
            url: patrick,
            description: "Very happy, very excited, almost too excited. Loves snuggles and play time."
        }
    ]);
    
    useEffect(() => {
        axios.get("/users").then(response => {
        setDogs(response.data);
        })
    }, []);

    return (
        <div>
            <div className="dogCards_cardContainer">
                <style>{'body {background-color: #C3B1E1; }'}</style>
            {dogs.map(dog => (
                <TinderCard
                    className="swipe"
                    key={dog.name}
                    
                    preventSwipe={['up','down']}
                >

                    <div 
                    style={{backgroundImage: `url(${dog.url})`}}
                    className="card">
                       <h3>{dog.name}</h3>
                    </div>

                    <p class="description">{dog.description}</p>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default DogCards;