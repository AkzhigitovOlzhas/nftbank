import React from "react";
import Tabs from "./Tabs";
import "./style.css";

export const VerticalTab = ({ id_link, title, icon, tabs, reverse }) => {
  return (
    <div className="tabs container_app" id={id_link}>
      <Tabs title={title} icon={icon} reverse={reverse}>
        {tabs.map((tab) => {
          return tab;
        })}
      </Tabs>
    </div>
  );
};
