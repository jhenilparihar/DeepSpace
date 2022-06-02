import React, { useState, useEffect } from "react";
import eth from "./eth.svg";
import filter from "./filter.svg";
import open from "./open.svg";
import "./explore.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const Explore = ({ AllNFT, accountAddress, totalTokensMinted }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (AllNFT.length !== 0) {
      if (AllNFT[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [AllNFT]);
  function expand() {
    const slider = document.querySelector(".slider1");
    const filter = document.querySelector(".filter");
    const filter_op = document.querySelector(".filter-op");
    slider.classList.toggle("expanded");
    filter.classList.toggle("filter1");
    filter_op.classList.toggle("filter-op1");
  }

  function DropDown() {
    const dropdowns = document.querySelectorAll(".dropdown");

    //Loop through all dropdown elements

    dropdowns.forEach((dropdown) => {
      //Get inner elements from each dropdown

      const select = dropdown.querySelector(".select");

      const caret = dropdown.querySelector(".caret");

      const menu = dropdown.querySelector(".explore-menu");

      const options = dropdown.querySelectorAll(".explore-menu li");

      const selected = dropdown.querySelector(".selected");

      select.addEventListener("click", () => {
        //Add the clicked select styles to the select element

        select.classList.toggle("select-clicked");

        //Add the rotate styles to the caret element

        caret.classList.toggle("caret-rotate");

        //Add the open styles to the menu element

        menu.classList.toggle("menu-open");
      });

      options.forEach((option) => {
        //Add a click event to the option element

        option.addEventListener("click", () => {
          //Change selected inner text to clicked option inner text
          selected.innerText = option.innerText;

          //Add the clicked select styles to the select element

          //Add the open styles to the menu element

          select.classList.remove("select-clicked"); //Add the rotate styles to the caret element
          caret.classList.remove("caret-rotate");
          menu.classList.remove("menu-open"); //Remove active class from all option elements
          options.forEach((option) => {
            option.classList.remove("active");
          });
          option.classList.add("active");
        });
      });
    });
  }
  return (
    <>
      <div class="outer-container">
        <div class="slider1">
          <div className="top-bar">
            <div className="filter">
              <img src={filter} alt="" class="filter-img" />
              <p> Filter</p>
            </div>
            <div class="open-close-pointer" onClick={expand}>
              <img src={open} alt="" class="toggle-image" />
            </div>
          </div>
          <div className="filter-op">
            <div className="status-div">
              <p>Status</p>
              <div className="status-options">
                <div className="flex-div">
                  <div className="part1">
                    <div className="stat">Buy Now</div>
                    <div className="stat">Buy Now</div>
                  </div>
                  <div className="part1">
                    <div className="stat">Buy Now</div>
                    <div className="stat">Buy Now</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="status-div">
              <p>Price</p>
              <div className="status-options">
                <div className="flex-div">
                  <form action="">
                    <div className="part1">
                      <input
                        className="stat"
                        typeof="number"
                        placeholder="Min"
                      ></input>
                      <p>to</p>
                      <input
                        className="stat"
                        typeof="number"
                        placeholder="Max"
                      ></input>
                    </div>
                    <div className="part2">
                      <button className="stat" typeof="submit">
                        Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-explore-container">
          <div class="row upper-filters">
            <div class="col-lg-6 col-md-4 col-sm-1 total">
              {totalTokensMinted} items
            </div>
            <div class="col-lg-3 col-md-3 col-sm-1 "></div>
            <div class="col-lg-3 col-md-3 col-sm-1 ">
              <div class="dropdown">
                <div class="select" onClick={DropDown}>
                  <span class="selected">Sort by</span>
                  <div class="caret"></div>
                </div>
                <ul class="explore-menu">
                  <li class="active">Facebook</li>
                  <li>Recently used</li>
                  <li>Recently created</li>
                  <li>Recently sold</li>
                  <li>Price: Low to High</li>
                  <li>Price: High to Low</li>
                  <li>Oldest</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row nft-card-row">
            <div className="container">
              <div class="row nft-container">
                {AllNFT.map((NFT) => {
                  return (
                    <div
                      key={NFT.tokenId.toNumber()}
                      class="col-3 col-lg-3 col-md-6 col-sm-1 align-items-center nft_card"
                    >
                      <Link to={"/assets/details/" + NFT.tokenId.toNumber()}>
                        <div className="details-div">
                          <div class="inner-div">
                            {!loading ? (
                              <img
                                class="buy-nft-image"
                                src={
                                  NFT.metaData !== undefined
                                    ? NFT.metaData.imageUrl
                                    : ""
                                }
                                alt=""
                              />
                            ) : (
                              <Loading />
                            )}
                          </div>
                          <div class="row nft-details">
                            <div class="col nft-name-explore">
                              <p class="n">
                                {NFT.currentOwner.substr(0, 5) +
                                  "..." +
                                  NFT.currentOwner.slice(
                                    NFT.currentOwner.length - 5
                                  )}
                              </p>
                              <p class="nft-owner-name-explore">
                                {NFT.tokenName}
                              </p>
                            </div>
                            <div class="col nft-price-explore">
                              <p class="n">Price</p>
                              <p>
                                <img src={eth} alt="" class="ether-img" />{" "}
                                {window.web3.utils.fromWei(
                                  NFT.price.toString()
                                )}{" "}
                              </p>
                            </div>
                          </div>
                          <div class="row buy-details"></div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
