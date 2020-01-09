import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";

class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        Select a language:
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        ></i>
        <i
          className="flag eg"
          onClick={() => this.onLanguageChange("arabic")}
        ></i>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate></UserCreate>
        </LanguageContext.Provider>
      </div>
    );
  }
}
export default App;
