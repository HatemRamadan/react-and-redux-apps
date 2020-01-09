import React from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const txt = this.context === "english" ? "Submit" : "تم";
    return <button className="ui button primary">{txt}</button>;
  }
}

export default Button;
