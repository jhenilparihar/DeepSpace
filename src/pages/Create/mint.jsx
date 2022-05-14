import './style.css'
const Mint = () => {
    return (
      <div class="main-u">
        <div class="inner-u">
          <div class="form-c">
            <form action="">
              <h1>Create New Item</h1>
              <p class='sub-head'>
                <span>* </span>Required fields{" "}
              </p>
              <div class="banner-image">
                <label for="b2" class="head">
                  {" "}
                  Image, Video, Audio, or 3D Model <span>*</span>
                </label>
                <p class="sub-head">
                  File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                  OGG, GLB, GLTF. Max size: 100 MB
                </p>
                <div id="b2" class="nft-image">
                  <input type="file" />
                  {/* <img src={fileUp}></img> */}
                </div>
              </div>
              <label for="text-1542372332072" class="head">
                Name <span>*</span>
              </label>
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  name="text-1542372332072"
                  id="text-1542372332072"
                  required="required"
                  placeholder="Item name"
                ></input>
                {/* <label for="text-1542372332072"> Name</label> */}
              </div>
              <div class="des-group">
                <label for="des" class="head">
                  Description
                </label>
                <p class='sub-head'>
                The description will be included on the item's detail page underneath its image.
                </p>
                  <textarea
                    id="des"
                    name="des"
                    rows="8"
                    cols="60"
                    placeholder="Share about your NFT."
                  ></textarea>
              </div>
              <hr></hr>
              <button type="submit" class="create-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Mint;