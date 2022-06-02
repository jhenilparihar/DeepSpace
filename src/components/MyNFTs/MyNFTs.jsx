import React, { useState, useEffect } from "react";
import MyNFTDetails from "../MyNFTDetails/MyNFTDetails";
import Loading from "../Loading/Loading";

const MyNFTs = ({
  accountAddress,
  NFTs,
  totalTokensOwnedByAccount
}) => {
  const [loading, setLoading] = useState(false);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    if (NFTs.length !== 0) {
      if (NFTs[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  
    const my_NFTs = NFTs.filter(
      (NFT) => NFT.currentOwner === accountAddress
    );
    console.log(NFTs);
    setMyNFTs(my_NFTs);
  }, [NFTs]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of NFT's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myNFTs.map((NFT) => {
          return (
            <div
              key={NFT.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
                  {!loading ? (
                    <img height={250} width={250} src={NFT.metaData !== undefined
                               ? NFT.metaData.imageUrl
                               : ""} alt="" />
                    
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="col-md-6 text-center">
                  <MyNFTDetails
                    NFT={NFT}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyNFTs;
