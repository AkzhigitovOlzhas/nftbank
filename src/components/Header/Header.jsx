import React from "react";
import logo from "../../img/navi_logo.svg";
import icon5 from "../../img/icon5.svg";
import burger_icon from "../../img/burger_icon.png";
import "./style.css";

export const Header = ({ handleOpenMenu }) => {
  return (
    <div className="header">
      <div className="container_app py-4 justify-content-between align-items-center d-none d-sm-flex">
        <a href="/" className="hover_blackout">
          <img src={logo} alt="" style={{ width: "50px" }} />
        </a>

        <a
          href="#portfolio"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-pie"
            className="text-white"
            width="25px"
            height="25px"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 544 512"
          >
            <path
              fill="currentColor"
              d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
            ></path>
          </svg>
          <span className="fs-5 ms-2 d-md-block d-none">Portfolio</span>
        </a>
        <a
          href="#price_discovery"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="calculator"
            className="text-white"
            width="25px"
            height="25px"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"
            ></path>
          </svg>
          <span className="fs-5 ms-2 d-md-block d-none">Global search</span>
        </a>
        <a
          href="#analytics"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="parachute-box"
            className="text-white"
            width="25px"
            height="25px"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M511.9 175c-9.1-75.6-78.4-132.4-158.3-158.7C390 55.7 416 116.9 416 192h28.1L327.5 321.5c-2.5-.6-4.8-1.5-7.5-1.5h-48V192h112C384 76.8 315.1 0 256 0S128 76.8 128 192h112v128h-48c-2.7 0-5 .9-7.5 1.5L67.9 192H96c0-75.1 26-136.3 62.4-175.7C78.5 42.7 9.2 99.5.1 175c-1.1 9.1 6.8 17 16 17h8.7l136.7 151.9c-.7 2.6-1.6 5.2-1.6 8.1v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-2.9-.9-5.4-1.6-8.1L487.1 192h8.7c9.3 0 17.2-7.8 16.1-17z"
            ></path>
          </svg>
          <span className="fs-5 ms-2 d-md-block d-none">Airdrop</span>
        </a>
        <a
          href="/"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout"
        >
          <img src={icon5} alt="" style={{ width: "35px", height: "35px" }} />
          <span className="fs-5 ms-2 d-md-block d-none">Estimate API Docs</span>
        </a>

        <div></div>
      </div>

      <div className="d-sm-none container_app d-flex justify-content-between py-3 align-items-center">
        <a href="/" className="hover_blackout">
          <img src={logo} alt="" style={{ width: "50px" }} />
        </a>
        <div onClick={handleOpenMenu}>
          <img src={burger_icon} alt="" style={{ width: "40px" }} />
        </div>
      </div>
    </div>
  );
};
