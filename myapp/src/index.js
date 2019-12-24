// Import react and react dom libs
import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import ComponentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react component
const App = () => {
  const buttonTxt = "Click Me!";
  const labelTxt = "Enter Name: ";

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ComponentDetail author="Hatem" comment="Wow Great!"></ComponentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail author="John" comment="Wow Nice!"></ComponentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail author="Omar" comment="Hahahahahaha"></ComponentDetail>
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App></App>, document.querySelector("#root"));
