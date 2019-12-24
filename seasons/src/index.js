import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMsg: error.message })
    );
    console.log("mounted");
  }

  renderContent() {
    if (this.state.errorMsg) return <div>Error: {this.state.errorMsg}</div>;

    if (this.state.lat)
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;

    if (!this.state.errorMsg && !this.state.lat)
      return <Spinner message="Please accept location request"></Spinner>;

    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMsg}
      </div>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App></App>, document.querySelector("#root"));
