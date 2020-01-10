import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import uselocation from "./useLocation";

const App = () => {
  const [lat, errorMsg] = uselocation();
  let content;
  if (errorMsg) content = <div>Error: {errorMsg}</div>;
  else if (lat) content = <SeasonDisplay lat={lat}></SeasonDisplay>;
  else content = <Spinner message="Please accept location request"></Spinner>;

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
