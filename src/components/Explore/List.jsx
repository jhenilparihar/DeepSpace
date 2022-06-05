import React, { useState, useEffect } from "react";
import eth from "./eth.svg";
import filter from "./filter.svg";
import open from "./open.svg";
import "./explore.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const List = ({ NFTLIST }) => {
    const [loading, setLoading] = useState(false);
return (
    <>
<div className="row nft-card-row">
            <div className="container">
              <div class="row nft-container">
                {NFTLIST.map((NFT) => {
                  return (
                    <div
                      key={NFT.tokenId.toNumber()}
                      class="col-4 col-lg-4 col-md-6 col-sm-1 align-items-center nft_card"
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
          </>
);
}
export default List;