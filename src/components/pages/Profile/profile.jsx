import React from "react";

import "./profile.css";
import setting from './setting.png';
import share from './share.png';
import profileImage from './avatar.png';

const Profile = () => {
  return (
    <div class="main">
      <div class="upper">
        <input type="file" />
      </div>
      <div class="details">
        <div class="details-inner">
          <div class="prof-img">
            
          <img src={profileImage} alt="" />
          <input type="file" />
            <div className="profile-img-overlay">

            </div>
          </div>
          <div class="user-details">
            <h1>Unnamed</h1>
            <div class="address">0xdb5D...1108</div>
            <p>Joined May 2022</p>
          </div>
        </div>
          <div class="share__Icon">
            <img class="icons" src={share} alt="" />
          </div>
          <div class="settings__Icon">
              <img class="icons" src={setting} alt="" />
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
