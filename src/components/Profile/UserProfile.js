import Header from "../profileHeader/Header";
import Filter from "../profileHeader/FilterHeader";
import Details from "../profileHeader/UserDetails";
import Allmynft from "../profileHeader/Allmynft";

function UserProfile(props) {
  return(
    <>
    <Header allUserProfile={props.allUserProfile} accountAddress={props.accountAddress}></Header>
    <Details allUserProfile={props.allUserProfile} accountAddress={props.accountAddress}></Details>
    <Filter></Filter>
    <Allmynft></Allmynft>
    </>
  )
}

export default UserProfile;