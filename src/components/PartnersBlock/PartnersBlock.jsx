import React from "react";
import "./style.css";
import img1 from "../../img/hashed_logo.png";
import img2 from "../../img/dcg_logo.png";
import img3 from "../../img/1kx_logo.png";
import img4 from "../../img/sandbox_logo.png";
import img5 from "../../img/klaytn_logo.png";

export const PartnersBlock = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="line_left"></div>
        <div className="text-nowrap mx-4 fst-italic fs-5 text-gray">
          Trusted by Leading Investors
        </div>
        <div className="line"></div>
      </div>
      <div className="d-none d-md-flex w-75 mx-auto justify-content-between align-items-center my-3">
        <a href="/" className="partner_logo hover_blackout">
          <img src={img1} alt="" className="img_logo" />
        </a>
        <a href="/" className="partner_logo hover_blackout mx-5">
          <img src={img2} alt="" className="img_logo" />
        </a>
        <a href="/" className="partner_logo hover_blackout">
          <img src={img3} alt="" className="img_logo" />
        </a>
        <a href="/" className="partner_logo hover_blackout mx-5">
          <img src={img4} alt="" className="img_logo" />
        </a>
        <a href="/" className="partner_logo hover_blackout">
          <img src={img5} alt="" className="img_logo" />
        </a>
      </div>
      <div className="d-block d-md-none my-3">
        <div className="w-75 d-flex justify-content-center mx-auto">
          <a href="/" className="partner_logo hover_blackout">
            <img src={img1} alt="" className="img_logo" />
          </a>
          <a href="/" className="partner_logo hover_blackout mx-sm-5 mx-3">
            <img src={img2} alt="" className="img_logo" />
          </a>
          <a href="/" className="partner_logo hover_blackout">
            <img src={img3} alt="" className="img_logo" />
          </a>
        </div>
        <div className="w-75 d-flex justify-content-center mx-auto mt-4">
          <a href="/" className="partner_logo hover_blackout me-3">
            <img src={img4} alt="" className="img_logo" />
          </a>
          <a href="/" className="partner_logo hover_blackout ms-3">
            <img src={img5} alt="" className="img_logo" />
          </a>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};
