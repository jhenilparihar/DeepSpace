import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import {Link} from "react";

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
    return (
      // <div key={this.props.NFT.tokenId.toNumber()} className="mt-4">
      //   <p>
      //     <span className="font-weight-bold">Token Id</span> :{" "}
      //     {this.props.NFT.tokenId.toNumber()}
      //   </p>
      //   <p>
      //     <span className="font-weight-bold">Name</span> :{" "}
      //     {this.props.NFT.tokenName}
      //   </p>
      //   <p>
      //     <span className="font-weight-bold">Minted By</span> :{" "}
      //     {this.props.NFT.mintedBy.substr(0, 5) +
      //       "..." +
      //       this.props.NFT.mintedBy.slice(
      //         this.props.NFT.mintedBy.length - 5
      //       )}
      //   </p>
      //   <p>
      //     <span className="font-weight-bold">Owned By</span> :{" "}
      //     {this.props.NFT.currentOwner.substr(0, 5) +
      //       "..." +
      //       this.props.NFT.currentOwner.slice(
      //         this.props.NFT.currentOwner.length - 5
      //       )}
      //   </p>
      //   <p>
      //     <span className="font-weight-bold">Previous Owner</span> :{" "}
      //     {this.props.NFT.previousOwner.substr(0, 5) +
      //       "..." +
      //       this.props.NFT.previousOwner.slice(
      //         this.props.NFT.previousOwner.length - 5
      //       )}
      //   </p>
      //   <p>
      //     <span className="font-weight-bold">Price</span> :{" "}
      //     {window.web3.utils.fromWei(
      //       this.props.NFT.price.toString(),
      //       "Ether"
      //     )}{" "}
      //     Ξ
      //   </p>
      //   <p>
      //     <span className="font-weight-bold">No. of Transfers</span> :{" "}
      //     {this.props.NFT.numberOfTransfers.toNumber()}
      //   </p>
      //   <div>
      //     {this.props.accountAddress === this.props.NFT.currentOwner ? (
      //       <form
      //         onSubmit={(e) => {
      //           e.preventDefault();
      //           this.callChangeTokenPriceFromApp(
      //             this.props.NFT.tokenId.toNumber(),
      //             this.state.newNFTPrice
      //           );
      //         }}
      //       >
      //         <div className="form-group mt-4 ">
      //           <label htmlFor="newNFTPrice">
      //             <span className="font-weight-bold">Change Token Price</span> :
      //           </label>{" "}
      //           <input
      //             required
      //             type="number"
      //             name="newNFTPrice"
      //             id="newNFTPrice"
      //             value={this.state.newNFTPrice}
      //             className="form-control w-50"
      //             placeholder="Enter new price"
      //             onChange={(e) =>
      //               this.setState({
      //                 newNFTPrice: e.target.value,
      //               })
      //             }
      //           />
      //         </div>
      //         <button
      //           type="submit"
      //           style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
      //           className="btn btn-outline-info mt-0 w-50"
      //         >
      //           change price
      //         </button>
      //       </form>
      //     ) : null}
      //   </div>
      //   <div>
      //     {this.props.accountAddress === this.props.NFT.currentOwner ? (
      //       this.props.NFT.forSale ? (
      //         <button
      //           className="btn btn-outline-danger mt-4 w-50"
      //           style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
      //           onClick={() =>
      //             this.props.toggleForSale(
      //               this.props.NFT.tokenId.toNumber()
      //             )
      //           }
      //         >
      //           Remove from sale
      //         </button>
      //       ) : (
      //         <button
      //           className="btn btn-outline-success mt-4 w-50"
      //           style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
      //           onClick={() =>
      //             this.props.toggleForSale(
      //               this.props.NFT.tokenId.toNumber()
      //             )
      //           }
      //         >
      //           Keep for sale
      //         </button>
      //       )
      //     ) : null}
      //   </div>
      //   <div>
      //     {this.props.accountAddress !== this.props.NFT.currentOwner ? (
      //       this.props.NFT.forSale ? (
      //         <button
      //           className="btn btn-outline-primary mt-3 w-50"
      //           value={this.props.NFT.price}
      //           style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
      //           onClick={(e) =>
      //             this.props.buyNFT(
      //               this.props.NFT.tokenId.toNumber(),
      //               e.target.value
      //             )
      //           }
      //         >
      //           Buy For{" "}
      //           {window.web3.utils.fromWei(
      //             this.props.NFT.price.toString(),
      //             "Ether"
      //           )}{" "}
      //           Ξ
      //         </button>
      //       ) : (
      //         <>
      //           <button
      //             disabled
      //             style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
      //             className="btn btn-outline-primary mt-3 w-50"
      //           >
      //             Buy For{" "}
      //             {window.web3.utils.fromWei(
      //               this.props.NFT.price.toString(),
      //               "Ether"
      //             )}{" "}
      //             Ξ
      //           </button>
      //           <p className="mt-2">Currently not for sale!</p>
      //         </>
      //       )
      //     ) : null}
      //   </div>
      // </div>
      <div key={this.props.NFT.tokenId.toNumber()} class="col nft-buy">
        {this.props.accountAddress !== this.props.NFT.currentOwner ? (
          <Link to={"asset/details/" + this.props.NFT.tokenId.toNumber()}>
            <p>Buy Now</p>
          </Link>
        ) : (
          <p>Modify details</p>
        )}
      </div>
    );
  }
}

export default NFTDetails;
