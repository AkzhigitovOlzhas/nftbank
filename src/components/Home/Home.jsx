import React from "react";
import img1 from "../../img/img1.png";
import "./style.css";

export const Home = () => {
  return (
    <div className="container_app home d-flex align-items-center">
      <div className="row align-items-center text-white">
        <div className="col-12 col-lg-6 my-5 my-lg-0 fade-in-right">
          <div className="title text-center text-lg-start">
            Make NFT Portfolio Management Smart
          </div>
          <div className="fs-5 mt-5" style={{ lineHeight: "45px" }}>
            <div>
              NFT Holders of all sizes [ from newbies to whales ] use NFTBank
            </div>
            <div>to track their portfolios of $2 billions worth of NFTs,</div>
            <div>discover the price of 🔥 hottest NFTs,</div>
            <div>and act based on the important signals at the right time.</div>
          </div>
        </div>
        <div className="col-12 col-lg-6 fade-in-left">
          <img src={img1} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};
