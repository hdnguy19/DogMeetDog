import React, { useEffect, useState } from "react";
import { useStateValue } from "../stateProvider.js";
import "./profile.css";
import profilePic from "../assets/logo.jpeg";
import axios from "../axios.js";

function Profile() {
  const [name, setName] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    const getUserInfo = async () => {
      await axios.get(`/users/${user.email}`).then(response => {
        if (response.data) console.log("this is the stuff from api");
        console.log(response.data);
        setName(response.data.name);
      });
    };

    getUserInfo();
  }, []);

  const editProfile = () => {};
  return (
    <div className="screen">
      <button className="edit_profile_text" onClick={editProfile}>
        Edit Profile
      </button>
      <img src={profilePic} alt="profilePic" className="picture" />
      <button className="change_profile_pic">Change Profile Photo</button>
      <div className="profile_info">
        <h1>Name: {name}</h1>
        <h1>Age: 3</h1>
        <h1>Sex: F</h1>
        <h1>Bio: Long walks!</h1>
      </div>
    </div>
  );
}

export default Profile;
