import "./style.css";
import eth from "./eth.svg";
import wallet from './wallet.png';
import share from './share.png';

const NFTDetails = () => {
  return (
    <>
      <div class="details-main">
        <div className="row">
          <div class="col col-sm-12 detail-page__nft-image">
            <div className="row nft-image-header">
              <img class="eth-small" src={eth} alt="" />
            </div>
            <div className="row nft-image-div">
              <img src="https://lh3.googleusercontent.com/bPqYaKsAWKuy9JNl_UB4EMJNqYoQjWjNOTMTfPYx8yotTp_r4Cm_OurINhWb0yx4JOJBcsXH55phWoP_B6IPpGihkV01eyXjA8T7YQ=w600" alt=""></img>
            </div>
          </div>
          <div class="col col-sm-12 nft-item-details">
            <div className="row">
              <div className="col-10 creator_details">
                <a class='creator-name' href=""> Pop It Punks </a>
              </div>
              <div className="col">
                <div className="row nft-details-share">
                  <img src={share} height='25px' alt="" />
                </div>
              </div>
              <h1 className="nft-name">Pop It Punk #8266</h1>
              <div className="row owner_name">
                <span>Owned by <a href="">SimpleDimplePopItSqui...</a></span>
              </div>
              <div className="row price_row">
                <div className="row created_on">
                  Sale ends June 14, 2022 at 9:16pm GMT+5:30
                </div>
                <div className="row price_div">
                  <div className="row price-header">Current price</div>
                  <div className="row assets-price-detail">
                    
                    <img src={eth} class='eth_icon' alt=""></img>
                    <span class="eth_price">0.08 </span>
                    <span class="dollar_price">($162.52)</span>  
                  </div>
                  <div className="row">
                    <button class="buy_now-btn">
                      <img class="wallet_icon" src={wallet} alt=""></img>
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NFTDetails;
