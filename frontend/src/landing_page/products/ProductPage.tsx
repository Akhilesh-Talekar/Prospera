import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import { Coin, Console, kite, Kite_connect, Varsity} from "../../../constants";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero/>
      <LeftSection detailsL={kite}/>
      <RightSection detailsR={Console}/>
      <LeftSection detailsL={Coin}/>
      <RightSection detailsR={Kite_connect}/>
      <LeftSection detailsL={Varsity}/>
      <p className="fs-5 text-center mt-5">Want to know more about our technology stack? Check out the <a href="" className="text-decoration-none">Prospera.tech</a> blog.</p>
      <Universe/>
    </>
  );
};

export default ProductPage;
