import React, { Component } from "react";
import { Link } from "react";

import "./style.css";
import eth from "./eth.svg";
import wallet from "./wallet.png";
import share from "./share.png";

class NFTDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNFTPrice: "",
    };
  }

  callChangeTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeTokenPrice(tokenId, newPrice);
  };
  render() {
    console.log(this.props.NFT);
    return (
      <>
        <div class="details-main">
          <div className="row">
            <div class="col col-sm-12 detail-page__nft-image">
              <div className="row nft-image-header">
                <img class="eth-small" src={eth} alt="" />
              </div>
              <div className="row nft-image-div">
                <img
                src={
                  this.props.NFT.metaData !== undefined
                    ? this.props.NFT.metaData.imageUrl
                    : ""
                }
                alt=""
                ></img>
              </div>
            </div>
            <div class="col col-sm-12 nft-item-details">
              <div className="row">
                <div className="col-10 creator_details">
                  <a class="creator-name" href="">
                    {this.props.NFT.mintedBy.substr(0, 5) +
                      "..." +
                      this.props.NFT.mintedBy.slice(
                        this.props.NFT.mintedBy.length - 5
                      )}
                  </a>
                </div>
                <div className="col">
                  <div className="row nft-details-share">
                    <img src={share} height="25px" alt="" />
                  </div>
                </div>
                <h1 className="nft_name">
                  {this.props.NFT.tokenName} #
                  {this.props.NFT.tokenId.toNumber()}
                </h1>
                <div className="row owner_name">
                  <span>
                    Owned by{" "}
                    <a href="">
                      {this.props.NFT.currentOwner.substr(0, 5) +
                        "..." +
                        this.props.NFT.currentOwner.slice(
                          this.props.NFT.currentOwner.length - 5
                        )}
                    </a>
                  </span>
                </div>
                <div className="row price_row">
                  <div className="row created_on">
                    Sale ends June 14, 2022 at 9:16pm GMT+5:30
                  </div>
                  <div className="row price_div">
                    <div className="row price-header">Current price</div>
                    <div className="row assets-price-detail">
                      <img src={eth} class="eth_icon" alt=""></img>
                      <span class="eth_price">
                        {window.web3.utils.fromWei(
                          this.props.NFT.price.toString(),
                          "Ether"
                        )}{" "}
                      </span>
                      <span class="dollar_price">($162.52)</span>
                    </div>
                    <div className="row">
                      {this.props.accountAddress !==
                      this.props.NFT.currentOwner ? (
                        this.props.NFT.forSale ? (
                          <button
                            class="buy_now-btn"
                            value={this.props.NFT.price}
                            onClick={(e) =>
                              this.props.buyNFT(
                                this.props.NFT.tokenId.toNumber(),
                                e.target.value
                              )
                            }
                          >
                            <img class="wallet_icon" src={wallet} alt=""></img>
                            Buy now
                          </button>
                        ) : (
                          <>
                            <button disabled class="buy_now-btn">
                              <img
                                class="wallet_icon"
                                src={wallet}
                                alt=""
                              ></img>
                              Buy now
                            </button>
                            <p className="mt-2">Currently not for sale!</p>
                          </>
                        )
                      ) : (
                        <>
                          <button disabled class="buy_now-btn">
                            <img class="wallet_icon" src={wallet} alt=""></img>
                            Buy now
                          </button>
                          <p />
                        </>
                      )}

                      {this.props.accountAddress ===
                      this.props.NFT.currentOwner ? (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            this.callChangeTokenPriceFromApp(
                              this.props.NFT.tokenId.toNumber(),
                              this.state.newNFTPrice
                            );
                          }}
                        >
                          <div className="form-group mt-4 ">
                            <label htmlFor="newNFTPrice">
                              <span className="font-weight-bold">
                                Change Token Price
                              </span>{" "}
                              :
                            </label>{" "}
                            <input
                              required
                              type="number"
                              name="newNFTPrice"
                              id="newNFTPrice"
                              value={this.state.newNFTPrice}
                              className="form-control w-50"
                              placeholder="Enter new price"
                              onChange={(e) =>
                                this.setState({
                                  newNFTPrice: e.target.value,
                                })
                              }
                            />
                          </div>
                          <button
                            type="submit"
                            style={{
                              fontSize: "0.8rem",
                              letterSpacing: "0.14rem",
                            }}
                            className="btn btn-outline-info mt-0 w-50"
                          >
                            change price
                          </button>
                        </form>
                      ) : null}

                      {/* <button class="buy_now-btn">
                        <img class="wallet_icon" src={wallet} alt=""></img>
                        Buy now
                      </button> */}

                      {this.props.accountAddress ===
                      this.props.NFT.currentOwner ? (
                        this.props.NFT.forSale ? (
                          <button
                            className="btn btn-outline-danger mt-4 w-50"
                            style={{
                              fontSize: "0.8rem",
                              letterSpacing: "0.14rem",
                            }}
                            onClick={() =>
                              this.props.toggleForSale(
                                this.props.NFT.tokenId.toNumber()
                              )
                            }
                          >
                            Remove from sale
                          </button>
                        ) : (
                          <button
                            className="btn btn-outline-success mt-4 w-50"
                            style={{
                              fontSize: "0.8rem",
                              letterSpacing: "0.14rem",
                            }}
                            onClick={() =>
                              this.props.toggleForSale(
                                this.props.NFT.tokenId.toNumber()
                              )
                            }
                          >
                            Keep for sale
                          </button>
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NFTDetails;
