import React from "react";
import metamaskIcon from "./metamask.svg";
import "./connect.css";
import "./easePack.jsx";
import "./rAF.js";
import "./script.js";
import "./script2.js";
import "./tweenLite.js"

const ConnectToMetamask = ({ connectToMetamask }) => {
  // return (
  //   <div className="jumbotron">
  //     <h1 className="display-5">
  //       NFT Marketplace
  //     </h1>
  //     <p className="lead">
  //       This is an NFT marketplace where you can mint your ERC721 implemented{" "}
  //       <i>NFTs</i> and manage them.
  //     </p>
  //     <hr className="my-4" />
  //     <button
  //       onClick={connectToMetamask}
  //       className="btn btn-primary d-flex align-items-center"
  //       style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
  //     >
  //       Connect Metamask{" "}
  //       <img
  //         src={metamaskIcon}
  //         alt="metamask-icon"
  //         style={{ width: "2rem", marginLeft: "0.5rem" }}
  //       />
  //     </button>
  //   </div>
  // );
  

return(
  <div id="large-header" class="large-header">
  <canvas id="demo-canvas"></canvas>
  <div id="logo-container"></div>
  <div class="content"></div>
  <h1 class="main-title">Connect to <span class="thin"> MetaMask</span></h1>
  <div class="down"><a class="a" href="#">Connect</a></div>  
</div>
);
};

export default ConnectToMetamask;
