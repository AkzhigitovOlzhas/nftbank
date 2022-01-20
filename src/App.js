import React, { useState } from "react";
import { Footer, Header, Home, PartnersBlock, VerticalTab } from "./components";
import { slide as Menu } from "react-burger-menu";
import img1 from "./img/portfolio_0.svg";
import img2 from "./img/portfolio_1.svg";
import img3 from "./img/portfolio_2.svg";
import img4 from "./img/portfolio_3.svg";
import img5 from "./img/valuation_0.svg";
import img6 from "./img/valuation_1.svg";
import img7 from "./img/analytics_0.svg";
import img8 from "./img/analytics_1.svg";
import img9 from "./img/analytics_2.svg";
import icon1 from "./img/icon_diamond.svg";
import icon2 from "./img/con_portfolio_logo.svg";
import icon3 from "./img/icon_signal.svg";
import icon5 from "./img/icon5.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const tabs1 = [
    <Tab
      key={1}
      label={
        <TabLabel
          index="01"
          title="Profile"
          description="Show off your experience & status"
        />
      }
    >
      <img src={img1} alt="" className="w-100" />
    </Tab>,
    <Tab
      key={2}
      label={
        <TabLabel
          index="02"
          title="Transactions"
          description="Unify your NFT transactions across all NFT collections and blockchains"
        />
      }
    >
      <img src={img2} alt="" className="w-100" />
    </Tab>,
    <Tab
      key={3}
      label={
        <TabLabel
          index="03"
          title="Financial Statements"
          description="Get the comprehensive understanding of your NFT investments"
        />
      }
    >
      <img src={img3} alt="" className="w-100" />
    </Tab>,
    <Tab
      key={4}
      label={
        <TabLabel
          index="04"
          title="Inventory & Real-time Valuation"
          description="Understand the real time values of your NFTs in the wallets."
        />
      }
    >
      <img src={img4} alt="" className="w-100" />
    </Tab>,
  ];

  const tabs2 = [
    <Tab
      key={1}
      label={
        <TabLabel
          index="01"
          title="NFT Price Search"
          description="Discover the right price for NFTs"
        />
      }
    >
      <img src={img5} alt="" className="w-100" />
    </Tab>,
    <Tab
      key={2}
      label={
        <TabLabel
          index="02"
          title="Valuation API Service"
          description="Get the real-time valuation data via API"
        />
      }
    >
      <img src={img6} alt="" className="w-100" />
    </Tab>,
  ];

  const tabs3 = [
    <Tab
      key={1}
      label={
        <TabLabel
          index="01"
          title="Fundamental Indicators"
          description="Understand the overall market trend and the affactors affecting the price of NFTs"
        />
      }
    >
      <img src={img7} alt="" className="w-100" />
    </Tab>,
    <Tab
      key={2}
      label={
        <TabLabel
          index="02"
          title="Feeds"
          description="Don't miss big opportunites! Follow others portfolio and get the real-time feed"
        />
      }
    >
      <img src={img8} alt="" className="w-100" />
    </Tab>,
    <Tab
      key={3}
      label={
        <TabLabel
          index="03"
          title="Hyper-Personalized Email Notfication"
          description="Get the summary of the chagnes in your portfolio and receive important signals at the right time"
        />
      }
    >
      <img src={img9} alt="" className="w-100" />
    </Tab>,
  ];

  return (
    <div id="outer-container">
      <Menu
        onClose={() => setIsOpenMenu(false)}
        onOpen={() => setIsOpenMenu(true)}
        isOpen={isOpenMenu}
        right
        customBurgerIcon={false}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <a
          href="#portfolio"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout mb-3"
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
          <span className="fs-5 ms-2">Portfolio</span>
        </a>
        <a
          href="#price_discovery"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout mb-3"
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
          <span className="fs-5 ms-2">Global search</span>
        </a>
        <a
          href="#analytics"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout mb-3"
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
          <span className="fs-5 ms-2">Airdrop</span>
        </a>
        <a
          href="/"
          className="text-decoration-none text-white d-flex align-items-center hover_blackout mb-3"
        >
          <img src={icon5} alt="" style={{ width: "35px", height: "35px" }} />
          <span className="fs-5">Estimate API Docs</span>
        </a>
      </Menu>
      <div id="page-wrap">
        <Header handleOpenMenu={() => setIsOpenMenu(true)} />
        <Home />
        <PartnersBlock />
        <div className="my-5">
          <VerticalTab
            id_link="portfolio"
            title="NFT Portfolio Tracking"
            icon={icon2}
            tabs={tabs1}
            reverse={false}
          />
        </div>
        <div className="my-5">
          <VerticalTab
            id_link="price_discovery"
            title="Price Discovery & Valuation"
            icon={icon1}
            tabs={tabs2}
            reverse={true}
          />
        </div>
        <div className="my-5">
          <VerticalTab
            id_link="analytics"
            title="Analytics & Signals"
            icon={icon3}
            tabs={tabs3}
            reverse={false}
          />
        </div>
        <Footer />
      </div>
      <ScrollToTop smooth />
    </div>
  );
}

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

const TabLabel = ({ index, title, description }) => {
  return (
    <div className="mt-2 d-flex">
      <div className="fst-italic">{index}</div>
      <div className="ms-4">
        <div className="fs-24 text-start">{title}</div>
        <div className="fs-5 fst-italic text-start">{description}</div>
      </div>
    </div>
  );
};

export default App;
