import MainScreen from "./MainScreen";
import Section from "./Section";
import ai from "./animations/ai";
import audit from "./animations/audit";
import transperant2 from "./animations/transperant2";
import Section2 from "./Section2";
import Section3 from "./Section3";
import React from "react";

function Home(props) {
  console.log(ai)
  return (
    <>
      <MainScreen />
      <div className="h-[10px] w-full bg-tertiarygrey-670"></div>
      <Section
        animationData={ai}
        heading="NFT Generator AI"
        description="This AI will automatically create a digital art for which an NFT can be created."
        imagePosition="right"
      />
      <div className="h-[10px] w-full bg-tertiarygrey-670"></div>
      <Section
        animationData={audit}
        heading="Trustworthy Audits"
        description="This AI will automatically create a digital art for which an NFT can be created."
        imagePosition="left"
      />
      <div className="h-[10px] w-full bg-tertiarygrey-670"></div>
      <Section
        animationData={transperant2}
        heading="Complete Transperancy"
        description="This AI will automatically create a digital art for which an NFT can be created."
        imagePosition="right"
      />
      <div className="h-[10px] w-full bg-tertiarygrey-670"></div>
      <Section2 />
      <div className="h-[10px] w-full bg-tertiarygrey-670"></div>
      <Section3 />
    </>
  );
}

export default Home;
