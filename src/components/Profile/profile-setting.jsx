import { Link } from "react-router-dom";
import "./profile-setting.css";
import eye from "./eye.svg";
import React, { Component } from "react";

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

class Settings extends Component {

       
       constructor(props) {
              super(props);
              this.state = {
            bannerHash:this.props.currentProfile.bannerHash,        
            imageHash:this.props.currentProfile.imageHash,
            name:this.props.currentProfile.name,
            description:this.props.currentProfile.description,
            email:this.props.currentProfile.email,
            imageIsUpload:false,
              };
            }
            onUpload = async (e) => {
              const file = e.target.files[0]
              try {
                const added = await ipfs.add(file)
                const url = `https://ipfs.infura.io/ipfs/${added.path}`
                this.setState({ imageHash: url})
                this.setState({ imageIsUpload: true})
                console.log(url);
              } catch (error) {
                console.log('Error uploading file: ', error)
              }  
            }
            onUpload1 = async (e) => {
              const file = e.target.files[0]
              try {
                const added = await ipfs.add(file)
                const url = `https://ipfs.infura.io/ipfs/${added.path}`
                this.setState({ bannerHash: url})
                this.setState({ imageIsUpload: true})
                console.log(url);
              } catch (error) {
                console.log('Error uploading file: ', error)
              }  
            }
            callUploadProfileFromApp = (e) => {
              e.preventDefault();
              this.props.uploadProfile(
                this.state.bannerHash,
                this.state.imageHash,
                this.state.name,
                this.state.description,
                this.state.email,
              );
            
            };

    render() {
    return (
      <div class="setting-main main-u">
        <div class="inner-u">

          
          <div class="form-u">
        <form onSubmit={this.callUploadProfileFromApp} class="form-profile-setting">
        <h1>Profile Setting</h1>
        <label for="text-1542372332072">Userame</label>
         
        
         <div class="input-group nft-input">
  <input  class="form-control " type="text" name="text-1542372332072" id="text-1542372332072" required="required" placeholder="Ihr Name"
   value={this.state.name}
   onChange={(e) =>
       this.setState({ name: e.target.value })
     }
  ></input>
  <label for="text-1542372332072"> Name</label>
         </div>
         <label for="bio">Bio</label>
         <div class="ta">
         <textarea id="bio" name="bio" rows="4" cols="60"
          value={this.state.description}
          onChange={(e) =>
              this.setState({ description: e.target.value })
            }
         >Share about you.</textarea>
         </div>
         <label for="email">Email Address</label>
         <div class="input-group nft-input">
  <input  class="form-control" type="text" name="email" id="email" required="required" placeholder="Email"
  value={this.state.email}
  onChange={(e) =>
      this.setState({ email: e.target.value })
    }
  ></input>
  <label for="email"> Email</label>
         </div> 
         
        
         <div class="ppp" id='ppp'>
         <Link to="/profile">
         <button type="button" class="preview-btn"> <img src={eye} alt="" class="prev-btn-img" /> Preview</button> 
              </Link>
         <div class="profile-image nft-input">
         <label for="image"> ProfileImage</label>
         <div id='image'>
         <input 
         type="file" 
         onChange={this.onUpload}
          />
         </div>
         </div>
         <div class="banner-image nft-input">
         <label for="banner"> BannerImage</label>
         <div id='banner'>
         <input
          type="file"  
          onChange={this.onUpload1}/>
         </div>
         </div>
         </div>
         <button type='submit' class="save-btn">Save</button> 
        
               
          </form>
        
        </div>
        </div>
    </div> 
    );}
  }
  
  export default Settings;