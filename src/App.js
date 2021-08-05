import "./App.css";
import React from "react";
import CardHeader from "./CardHeader";
import CardOverview from "./CardOverview";
import data from "./data.json";
import "./styles/style.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lightMode: false,
    };
    this.setLightMode = this.setLightMode.bind(this);
  }
  setLightMode() {
    this.setState((prevState) => {
      //!remember this is pass by reference so we want to not do that
      return { lightMode: !prevState.lightMode };
    });
    console.log(this.state.lightMode);
  }
  determineCSSTheme() {
    if (this.state.lightMode) {
      return "App lightMode";
    } else {
      return "App";
    }
  }

  render() {
    const cardHeaderComponents = data.header.map((header) => (
      <CardHeader
        key={header.statNumber}
        userName={header.userName}
        statNumber={header.statNumber}
        statType={header.statType}
        statShiftNumber={header.statShiftNumber}
        increase={header.increase}
        site={header.site}
      />
    ));
    const cardOverviewComponents = data.overview.map((overview) => (
      <CardOverview
        key={overview.statNumber}
        statName={overview.statName}
        statNumber={overview.statNumber}
        statShiftNumber={overview.statShiftNumber}
        increase={overview.increase}
        site={overview.site}
      />
    ));
    return (
      <div className={this.determineCSSTheme()}>
        <div className="container">
          <div className="app-header">
            <div className="title-wrapper">
              <h1 className="title">Social Media Dashboard</h1>
              <h2 className="subtitle">Total Followers: 23,004</h2>
            </div>
            <hr />
            <div className="outer-wrapper">
              <p className="modeDesignator">
                {this.state.lightMode ? "Light Mode" : "Dark Mode"}
              </p>
              <label className="toggle-wrapper">
                {/* <div className="emptyDiv"></div> */}
                <input
                  className="toggle-default"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked={false}
                  onChange={() => {
                    this.setLightMode();
                  }}
                />
                <span className="toggle-custom"></span>
              </label>
            </div>
          </div>
          <header className="header">{cardHeaderComponents}</header>
          <h1 className="overview__header">Overview - Today</h1>
          <section className="overview">{cardOverviewComponents}</section>
        </div>
      </div>
    );
  }
}

export default App;
