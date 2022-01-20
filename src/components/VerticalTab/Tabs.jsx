import React from "react";

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div className={`row ${this.props.reverse ? "flex-row-reverse" : ""}`}>
        <div className="col-12 col-md-6 d-flex justify-content-center flex-column">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <div
              className="p-1 me-3"
              style={{ background: "#3b43ff", borderRadius: "5px" }}
            >
              <img src={this.props.icon} alt="" style={{ width: "36px" }} />
            </div>
            <div className="my-5 fs-4 fw-bold" style={{ color: "#557eff" }}>
              {this.props.title}
            </div>
          </div>
          {React.Children.map(this.props.children, (child) => {
            buttons.push(child.props.label);
            if (child.props.label === this.state.activeTab)
              content = child.props.children;
          })}

          <TabButtons
            activeTab={this.state.activeTab}
            buttons={buttons}
            changeTab={this.changeTab}
          />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center mt-5 mt-md-0">
          {content}
        </div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button, i) => {
        return (
          <button
            key={i}
            className={button === activeTab ? "active tab_btn" : "tab_btn"}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
