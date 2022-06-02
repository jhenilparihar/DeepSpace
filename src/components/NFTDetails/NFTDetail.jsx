import React from "react";
import Demo from './Demo';
import NFTDetails from "./NFT-Details/NFT-Details";
import { useParams } from "react-router-dom";

const NFTDetail = ({
  AllNFT,
  accountAddress,
  changeTokenPrice,
  toggleForSale,
  buyNFT,
}) => {
  const { id } = useParams();
  let tokenId = parseInt(id, 10)-1;

  // console.log(typeof(tokenId));
    return (
      <>
        <NFTDetails
          tokenId = {id}
          NFT={AllNFT[tokenId]}
          accountAddress={accountAddress}
          changeTokenPrice={changeTokenPrice}
          toggleForSale={toggleForSale}
          buyNFT={buyNFT}
        />
        

      </>   
    );
  };
  
export default NFTDetail;