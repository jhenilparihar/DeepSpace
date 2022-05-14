import './style.css';
const Profile = () => {
    return (
      <div class="main">
     <div class="upper" >
     <input type="file"  /></div>      
        <div class="details">
        <div class="details-inner">
        <div class="prof-img">
        <input type="file"  />
        </div>
        <div class="user-details">
          <h1>Unnamed</h1>
          <div class="address">cddd..ddd</div>
          <p>Joined May 2022</p>
        </div>
        
        </div>
        <div class="icon">
        <div class="share">
        <a  class="h">H</a>
        </div> 
        <div class="settings">
        <a href='#' class="G">G</a>
        </div> 
       
        </div>
        
        </div>  
        <div class="option">
        <ul class="menu">
        <li><a href="#">Minted Tokens</a></li>
        <li><a href="#">My Collection</a></li>
        
      </ul>
      
        </div>
        <hr/>
      </div>
    );
  };
  
  export default Profile;