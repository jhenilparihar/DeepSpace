import { Link } from "react-router-dom";
import './Profile.css';
import setting from './setting.png';
import share from './share.png';
import profileImage from './avatar.png';
import React from "react";

const Profile = ({currentProfile}) => {
  console.log(currentProfile.imageHash);
  return (
    <div class="main">
      <div class="upper">
      <img src={currentProfile.bannerHash} alt="" />
        <input type="file" />
      </div>
      <div class="details">
        <div class="details-inner">
          <div class="prof-img">
            
          <img src={currentProfile.imageHash} alt="" />
          {/* <input type="file" /> */}
            <div className="profile-img-overlay">

            </div>
          </div>
          <div class="user-details">
            <h1>{currentProfile.name}</h1>
            
            <div class="address">{currentProfile.user.substr(0, 5) +
                      "..." +
                      currentProfile.user.slice(
                        currentProfile.user.length - 5
                      )}</div>
            <p>Joined May 2022</p>

            <p>{currentProfile.description}</p>
            <p>{currentProfile.email}</p>
          </div>
        </div>
          <div class="share__Icon">
            <img class="icons" src={share} alt="" />
          </div>
          <div class="settings__Icon">
          <Link to="/profile/settings">
              <img class="icons" src={setting} alt="" />
              </Link>
          </div>
      </div>
      <div class="option">
        <ul class="menu">
          <li>
            <a href="#">Minted Tokens</a>
          </li>
          <li>
            <a href="#">My Collection</a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
