import React from "react";
import NFTDetails from "./NFT-Details";
import { useParams } from "react-router-dom";

const NFTDetail = ({
  AllNFT,
  accountAddress,
  changeTokenPrice,
  toggleForSale,
  buyNFT,
}) => {
  const { id } = useParams();
  let tokenId = parseInt(id, 10) - 1;
  return (
    <>
      <NFTDetails
        tokenId={id}
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
