import "./profile-setting.css";
import eye from "./eye.svg";
import React, { Component } from "react";

const Settings = () => {
    return (
      <div class="setting-main main-u">
        <div class="inner-u">

          
          <div class="form-u">
        <form action="" class="form-profile-setting">
        <h1>Profile Setting</h1>
        <label for="text-1542372332072">Userame</label>
         
        
         <div class="input-group nft-input">
  <input  class="form-control " type="text" name="text-1542372332072" id="text-1542372332072" required="required" placeholder="Ihr Name"></input>
  <label for="text-1542372332072"> Name</label>
         </div>
         <label for="bio">Bio</label>
         <div class="ta">
         <textarea id="bio" name="bio" rows="4" cols="60">Share about you.</textarea>
         </div>
         <label for="email">Email Address</label>
         <div class="input-group nft-input">
  <input  class="form-control" type="text" name="email" id="email" required="required" placeholder="Email"></input>
  <label for="email"> Email</label>
         </div> 
         <label for="email" class="social">Your Social Connections</label>
         <div class="input-group" id='has1'>
  <input  class="form-control" type="text" name="insta" id="insta" required="required" placeholder="YourInstagramHandle"></input>
  <label for="insta" > YourInstagramHandle</label>
  
         </div> 
         <div class="input-group" id='has2'>
   <input  class="form-control" type="text" name="site" id="site" required="required" placeholder="YourSite.io"></input>
  <label for="site"> YourSite.io</label>
         </div> 
         <div class="ppp" id='ppp'>
         <button class="preview-btn"> <img src={eye} alt="" class="prev-btn-img" /> Preview</button> 
         <div class="profile-image nft-input">
         <label for="image"> ProfileImage</label>
         <div id='image'>
         <input type="file"  />
         </div>
         </div>
         <div class="banner-image nft-input">
         <label for="banner"> BannerImage</label>
         <div id='banner'>
         <input type="file"  />
         </div>
         </div>
         </div>
         <button type='submit' class="save-btn">Save</button> 
        
               
          </form>
        
        </div>
        </div>
    </div> 
    );
  };
  
  export default Settings;