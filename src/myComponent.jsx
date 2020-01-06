import React from "react";
import MySubComponent from "../src/mySubComponent.jsx";
import "./myComponent.css";


class MyComponent extends React.Component {
  render() {  
    return (
      <div>
        <MySubComponent/>
        ...your code
      </div>
    );
  }
}

export default MyComponent;