import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import setting from "./setting.png";
import share from "./share.png";
import { Link } from "react-router-dom";

const ProfilePage = ({
  AllNFT,
  allProfiles
}) => {
  const { address } = useParams();
  const currentProfile = allProfiles[address]
  
  function MintedTab() {
    toggleActiveState();
    document.querySelector(".link_button1").disabled = true;
    document.querySelector(".link_button2").disabled = false;
  }

  function CollectionTab() {
    document.querySelector(".link_button2").disabled = true;
    document.querySelector(".link_button1").disabled = false;
    toggleActiveState();
  }

  function toggleActiveState() {
    document.querySelector(".link_button1").classList.toggle("active_");

    document.querySelector(".underline_1").classList.toggle("underline");
    document.querySelector(".underline_1").classList.toggle("option_underline");

    document.querySelector(".link_button2").classList.toggle("active_");
    document.querySelector(".underline_2").classList.toggle("option_underline");
    document.querySelector(".underline_2").classList.toggle("underline");
  }

  return (
    <>
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
              </div>
              <div class="user-details">
                <h1>{currentProfile.name}</h1>

                <div class="address">
                  {currentProfile.user.substr(0, 5) +
                    "..." +
                    currentProfile.user.slice(currentProfile.user.length - 5)}
                </div>
                <p>Joined May 2022</p>

                <p>{currentProfile.description}</p>
              </div>
            </div>
            <div class="share__Icon other_profile_page">
              <img class="icons" src={share} alt="" />
            </div>
          </div>
          <div class="option">
            <ul class="menu">
              <li>
                <button onClick={MintedTab} class="option_link link_button1 active_" href="#" >
                  Minted Tokens
                </button>
                <div class="underline_1 underline"></div>
              </li>
              <li>
                <button onClick={CollectionTab} class="option_link link_button2" href="#">
                  My Collection
                </button>
                <div class="underline_2 option_underline"></div>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default ProfilePage;
