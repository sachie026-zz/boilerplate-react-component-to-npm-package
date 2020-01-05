import React from "react";
import MultiStepCounter from "../src/multiStepCounter.jsx";
import MultiStepNav from "../src/multiStepNav.jsx";

class MultiSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: this.props.children ? this.props.children.length - 1 : 0,
      currentStep: 0,
      completedSteps: {}
    };
  }

  nextStep = e => {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep + 1
      };
    });
  };

  prevStep = e => {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep - 1
      };
    });
  };

  completed = (index, val) => {
    const cs = {
      ...this.state.completedSteps
    };

    if (!val) {
      delete cs[index];
      this.setState(prevState => ({
        completedSteps: cs
      }));
      return;
    }
    cs[index] = val;

    if (this.state.completedSteps.hasOwnProperty(index.toString())) {
    } else {
      this.setState(prevState => ({
        completedSteps: cs
      }));
    }
  };

  render() {
    const disableBack =  {
      pointerEvents : this.state.currentStep <= 0 ? "none" : "unset", 
      opacity: this.state.currentStep <= 0 ? 0.5 : 1
    }

    const disableNext =  {
      pointerEvents : this.state.currentStep >= this.state.steps ? "none" : "unset", 
      opacity: this.state.currentStep >= this.state.steps ? 0.5 : 1
    }

    const disableSubmit =  {
      pointerEvents : Object.keys(this.state.completedSteps).length > this.state.steps ? "unset" : "none", 
      opacity: Object.keys(this.state.completedSteps).length > this.state.steps ? 1 : 0.5
    }
    
    return (
      <div>
        <MultiStepNav disableBack={disableBack} disableNext={disableNext} disableSubmit={disableSubmit} nextStep={this.nextStep} prevStep={this.prevStep} />
        <div className="multi-step-body">
          {React.cloneElement(this.props.children[this.state.currentStep], {
            className: "firststepclass",
            completed: this.completed,
            stepindex: this.state.currentStep
          })}
        </div>
        <div className="multi-step-counter">
          <MultiStepCounter
            current={this.state.currentStep + 1}
            total={this.state.steps + 1}
          />
        </div>
      </div>
    );
  }
}

export default MultiSteps;