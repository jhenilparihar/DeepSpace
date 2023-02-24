import BlockChainContext from "@/store/blockchain-context";
import { useContext } from "react";
const Details = () => {
    const ctx=useContext(BlockChainContext)
    console.log(ctx.NFTs)
    console.log(ctx.allUserProfile[ctx.accountAddress])
  return (
    <div className="my-20 mx-[5%] flex items-center border-b-[1px] pb-5 border-tertiarygrey-450 ">
      <div className="w-[80%]">
        <div className=" flex items-baseline space-x-3">
          <span className="text-2xl   my-2 text-white font-bold">By</span>
          <p className="grad"> {ctx.allUserProfile[ctx.accountAddress]?.name}</p>
        </div>
        <p className="w-[60%] my-1">
         {ctx.allUserProfile[ctx.accountAddress]?.description}
        </p>
      </div>
      <div className="w-[20%]">
        <div className="my-6 flex space-x-3 justify-end font-medium font-display">
            <span className=" border-r-2 border-tertiarygrey-250 px-4">201 NFT'S </span>
            <span className="">185 Owners</span>
        </div>
        <div className="flex space-x-10 ">
          <div className="flex flex-col">
            <span className="rounded-sm border border-tertiarygrey-350 py-2 px-3 text-xl font-medium">
              10.5 K WRX
            </span>
            <p className="text-xs font-display font-extralight text-right my-1  text-tertiarygrey-350  ">
              Volume traded
            </p>
          </div>
          <div className="div flex flex-col">
            <span className="rounded-sm border border-tertiarygrey-350 py-2 px-3 text-xl font-medium">
              5.5 WRX
            </span>
            <p className="text-xs font-display font-extralight text-right text-tertiarygrey-350 my-1">
              Base price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
