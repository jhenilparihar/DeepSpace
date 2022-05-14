import './style.css';
const Profile = () => {
    return (
      <div class="main">
     <div class="upper" >
     <input type="file"  /></div>
        
        
  
       
        <div class="details">
        <div class="prof-img">
        <input type="file"  />
        </div>
        <div class="user-details">
          <h1>Unnamed</h1>
          <div class="address">cddd..ddd</div>
          <p>Joined May 2022</p>
        </div>
        <div class="icon">
        <a  class="h">H</a>
      
         
         <a href='#' class="G">G</a>
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