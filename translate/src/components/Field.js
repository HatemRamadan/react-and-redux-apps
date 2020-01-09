import React from "react";
import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const txt = this.context === "english" ? "Name" : "الاسم";
    return (
      <div className="ui field">
        <label>{txt}</label>
        <input />
      </div>
    );
  }
}
export default Field;
