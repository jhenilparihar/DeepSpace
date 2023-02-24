import React from "react";
import bg from "./images/bg.png";
function MainScreen(props) {
  console.log(bg);
  return (
    <div className="h-screen w-full relative">
      <img
        src={bg}
        className="absolute z-1 w-full h-full object-cover object-center"
      />
      <div className="h-full w-full absolute z-2 bg-black bg-opacity-20"></div>
      <div className="h-full w-full absolute z-3 bg-gradient-to-t from-tertiaryblack-50 to-tertiaryblack-50 via-transparent"></div>
      {/* <div className="h-full w-full absolute z- from-tertiaryblack-50 to-transperant"></div> */}
      {/* <div className="h-full w-full absolute z-2 bg-gradient-to-r from-tertiaryblack-50 to-transperant"></div>
      <div className="h-full w-full absolute z-2 bg-gradient-to-t from-tertiaryblack-50 to-transperant"></div> */}
      <div className="h-full w-full absolute z-5 font-title flex justify-center items-center">
        <div className="w-[40%] flex flex-col justify-center items-center">
          <div className="text-[50px] font-bold text-center">
            Explore the NFT world, collect and sell your artwork
          </div>
          <div className="text-base text-center mt-3 mb-6">
            Ready to set foot into the NFT marketplace?
          </div>
          {/* <div className="flex w-full "> */}
          <button
            type="button"
            className="rounded-lg text-base px-6 py-3 bg-tertiaryred-50 font-semibold hover:bg-tertiaryred-500 transition-all duration-200"
          >
            Get Started
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
