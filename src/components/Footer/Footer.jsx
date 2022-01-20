import React from "react";
import "./style.css";
import icon1 from "../../img/icon_cash.svg";
import icon2 from "../../img/icon_users.svg";
import icon3 from "../../img/icon_diamond.svg";
import icon4 from "../../img/icon_signal.svg";
import footer_logo from "../../img/footer_logo.svg";
import discord_logo from "../../img/discord_wh.svg";
import twitter_logo from "../../img/twitter_wh.svg";

export const Footer = () => {
  return (
    <div className="bg_footer py-5 mt-5">
      <div className="container_app text-white">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="fs-3">Getting started is easy</div>
          <div className="row footer_advantages w-100">
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center footer_card">
              <div className="footer_icon">
                <img src={icon1} alt="" style={{ width: "40px" }} />
              </div>
              <div className="footer_title">$2B</div>
              <div className="text-center text-gray">
                The worth of portfolios of the NFTBank users
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center footer_card">
              <div className="footer_icon">
                <img src={icon2} alt="" style={{ width: "40px" }} />
              </div>
              <div className="footer_title">TOP 5%</div>
              <div className="text-center text-gray">
                NFTBank users are 4x worthier than others on average
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center footer_card">
              <div className="footer_icon">
                <img src={icon3} alt="" style={{ width: "40px" }} />
              </div>
              <div className="footer_title text-nowrap">
                Multi-chain support
              </div>
              <div className="text-center text-gray">
                Ethereum, Polygon, Klaytn, and the upcoming chains (Flow and
                BSC)
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center footer_card">
              <div className="footer_icon">
                <img src={icon4} alt="" style={{ width: "40px" }} />
              </div>
              <div className="footer_title">10x faster</div>
              <div className="text-center text-gray">
                Don't miss any opportunities. NFTBank users find new
                opportunities 10x faster on average
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="mt-5 container_app">
        <div className="d-flex justify-content-between flex-column align-items-center flex-sm-row">
          <img src={footer_logo} alt="" style={{ width: "200px" }} />
          <div className="d-flex mt-3 mt-sm-0">
            <a href="https://github.com/" className="me-3 logo_icon">
              <img src={discord_logo} alt="" style={{ width: "30px" }} />
            </a>
            <a href="https://github.com/" className="logo_icon">
              <img src={twitter_logo} alt="" style={{ width: "30px" }} />
            </a>
          </div>
        </div>
        <div className="text-sm-end mt-4 text-gray text-center">
          Copyright © Contxts.io. Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};
