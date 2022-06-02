import {React, Component} from "react";
import { useParams } from "react-router-dom";
// // const AssetsDetails = () => {
// //   const tokenId = useParams().token_id

// //   return (
// //     <>
// //       <p>
// //         <strong>Token ID: </strong>
// //         {tokenId}
// //       </p>
// //     </>
// //   );
// // };

// class NFTDetails extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     NFTName: ""
//   //   };
//   // }
//   render() {
//     return (
//     <h2>Hi, I am a Car!</h2>
//     );
//   }
// }


// export default NFTDetails;

class AssetsDetails extends Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;

  }
}
export default AssetsDetails;