<p align="center">
 
<img height=200px src="./src/components/Navbar/assets/image.png" >         
        </p>
<h1 align="center"> DeepSpace </h1>
<h3 align="center"> Blockchain Based NFT marketplace DApp where users mint ERC721 implemented NFTs.<h3>

<div align="center">
  
 
  [![made-with-react](https://img.shields.io/badge/React-16.8.4-brightgreen.svg?style=for-the-badge)](https://github.com/facebook/create-react-app)
   [![](https://img.shields.io/badge/-Ethereum-lightgrey.svg?style=for-the-badge)](https://www.ethereum.org/)
    ![](https://img.shields.io/badge/Smart%20-Contract-lightgrey.svg?style=for-the-badge)
 ![](https://img.shields.io/github/forks/jhenilparihar/DeepSpace.svg?style=for-the-badge) 
  ![](https://img.shields.io/github/stars/jhenilparihar/DeepSpace.svg?style=for-the-badge) 
<!--   ![](https://img.shields.io/github/license/jhenilparihar/DeepSpace.svg?style=for-the-badge)
   -->
 </div>
  
  ## DeepSpace : About
- It is a blockchain based project for Trading Nft's. 
- It works on the idea that: “All the users can buy,sell,mint/create their Nft's or can just view Nft's that are created by other people in the world” The entire process       works on the blockchain in partnership with the IPFS(to provide data security). 
- Does Everything for Nft's : Creating ,Selling and Buying .
- Thus this is a modern way to manage and trade Nft's!
- This is my Diploma Final year Project.
  
## Insight
- It is D-App on [Ethereum](https://www.ethereum.org/).
- Back-End has Smart Contract 
- Front-end of our Web-App is made with [React.Js](https://github.com/facebook/create-react-app)   
- All User-Data is stored on [IPFS](https://ipfs.io/) also every data is first encryted locally and then send to ipfs to have more security
<p align="center">
 <img height=350px  src="https://user-images.githubusercontent.com/83356501/180175122-36c84feb-f08e-4d9e-b0a6-cc9f176c643a.png" >

</p>


- We are using [Metamask](https://metamask.io/) Browser Extension to work with Ethereum.
- We have used [Truffle](https://www.trufflesuite.com/) for testing our project
  
  
  
  ## How to Use

### Signup/Login
- Connect to metamask

<p align="center">
 <img width=650px  src="https://user-images.githubusercontent.com/83356501/180175201-a47d5a42-d2b1-4f34-9573-6926d44778a4.png" >
</p>
  
  
 - Upon First Signup `Metamask` User Profile will be set to default values.
 
 <p align="center">
 <img height=350px  src="https://user-images.githubusercontent.com/83356501/180176036-eefe5521-b786-4ab8-b633-bf0f5a8a6557.png" >
</p>  
  
  - You can edit your profile by going to the profile Setting page.
  
  - Landing page.
 
 <p align="center">
 <img height=350px  src="https://user-images.githubusercontent.com/83356501/180176575-c57f9284-7858-49b5-ba6b-4dfca324c025.gif">
</p> 
  
  - Landing page have these options :
 
         - `Create`
              - User's can create their Nft's by going to the create section. They can upload their artwork , give it name, set appropriate price and description.
 
         - `Explore`
              - User's can Explore all the Nft's that have been minted by all users on our site. On the explore page user will get some filter options like recently minted or getting Nft's between specific price range(some filters are yet to be added still working on it).
 
- Create page.
      - User's can create their Nft's by going to the create section. They can upload their artwork , give it name, set appropriate price and description.
 <p align="center">
 <img height=350px  src="https://user-images.githubusercontent.com/83356501/180176741-b0bf4d4c-f5b1-4e51-91c1-fb756d96aa7a.gif">
</p> 

- Explore page.
    - User's can Explore all the Nft's that have been minted by all users on our site. On the explore page user will get some filter options like recently minted or getting Nft's between specific price range(some filters are yet to be added still working on it).
 <p align="center">
 <img height=350px  src="https://user-images.githubusercontent.com/83356501/180176854-2be78343-12cd-4769-a538-66d396d88ec0.gif">
</p> 

- Nft Details page.
    - User's can view details about a particular Nft by clicking on it(nft info includes: Nft image, Creator, Current Owner,Previous Owner,Buy Option,if owner[then keep for sale/remove from sale option and change price option],description).
 <p align="center">
 <img height=350px  src="https://github.com/HarshDilipGhosalkar/DeepSpace/blob/main/images/nft details.gif" >
</p> 

- Buy Nft by clickinh on buy button
 <p align="center">
 <img height=350px  src="https://github.com/HarshDilipGhosalkar/DeepSpace/blob/main/images/buy.gif" >
</p> 

  - Query page.
    - User's can Query details about a particular Nft by the Id of it ,user can get address of the owner an csn get metadata about a particular nft by using its Id.
 <p align="center">
 <img height=350px  src="https://github.com/HarshDilipGhosalkar/DeepSpace/blob/main/images/query.gif" >
</p> 
<br>

#
### Stack
- [Solidity](https://docs.soliditylang.org/en/v0.7.6/) - Object-oriented, high-level language for implementing smart contracts.
- [Bootstrap 4](https://getbootstrap.com/) - CSS framework for faster and easier web development.
- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
- [web3.js](https://web3js.readthedocs.io/en/v1.3.4/) - Allows users to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
- [Truffle](https://www.trufflesuite.com/truffle) - Development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM).
- [Ganache](https://www.trufflesuite.com/ganache) - Personal blockchain for Ethereum development used to deploy contracts, develop DApps, and run tests.
#
### Interact with the deployed DApp
- Marketplace DApp requires [Metamask](https://metamask.io/) browser wallet extension to interact with.
- Connect metamask browser wallet to Localhost 7545 running a custom RPC like Ganache.
<!-- - Access Marketplace DApp at [NFT-marketplace]() and start minting your NFTs. -->
#
### Run the DApp Locally
#### Install truffle
```
npm install -g truffle
```
#### Install ganache-cli
```
npm i ganache-cli
```
#### Run ganache-cli
```
ganache-cli --port 7545
```
#### Open new terminal window and clone this repository
```
git clone https://github.com/jhenilparihar/DeepSpace.git
```
#### Install dependencies
```
cd DeepSpace
npm install
```
#### Compile smart contract
```
truffle compile
```
#### Deploy smart contract to ganache
```
truffle migrate
```
#### Test smart contract
```
truffle test
```
#### Start DApp
```
npm start
```
- Open metamask browser wallet and connect network to Localhost 7545.
- Import accounts from ganache-cli into the metamask browser wallet to make transactions on the DApp.

  -------------------------------------
  
  ## Contributing
  - We're are open to enhancements & bug-fixes.
  - Feel free to add issues and submit patches.
  ## Authors
  - Harsh Ghosalkar - [HarshDilipGhosalkar](https://github.com/HarshDilipGhosalkar)
  - Jhenil Parihar - [JhenilParihar](https://github.com/jhenilparihar)
  - Dev Jobalia -[DevJobalia](https://github.com/DevJobalia)
## License
This project is licensed under the MIT
