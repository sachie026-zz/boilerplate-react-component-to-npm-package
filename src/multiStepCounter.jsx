import React from "react";
import "./multiSteps.css";


class MultiStepCounter extends React.Component {
  render() {
    return (
     <React.Fragment>
       {this.props.current} / {this.props.total}
     </React.Fragment>
    );
  }
}

export default MultiStepCounter;
