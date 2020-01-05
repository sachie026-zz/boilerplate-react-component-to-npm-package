import React from "react";

class MultiStepCounter extends React.Component {
    render() {
      return (
       <React.Fragment>
         {this.props.current} / {this.props.total}
       </React.Fragment>
      );
    }
  }  

class MultiSteps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: this.props.children ? this.props.children.length - 1 : 0,
      currentStep: 0,
      completedSteps: {}
    };
  }

  handleClick = e => {
    this.props.completed(2);
  };

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
    const key = index.toString();
    if (this.state.completedSteps.hasOwnProperty(index.toString())) {
    } else {
      this.setState(prevState => ({
        completedSteps: cs
      }));
    }
  };

  finalSubmit = e => {};

  render() {
    const disableBack =  {
        pointerEvents : this.state.currentStep <= 0 ? "none" : "unset", 
        opacity: this.state.currentStep <= 0 ? 0.5 : 1
      }
  
      const disablePrev =  {
        pointerEvents : this.state.currentStep >= this.state.steps ? "none" : "unset", 
        opacity: this.state.currentStep >= this.state.steps ? 0.5 : 1
      }
  
      const disableSubmit =  {
        pointerEvents : Object.keys(this.state.completedSteps).length > this.state.steps ? "unset" : "none", 
        opacity: Object.keys(this.state.completedSteps).length > this.state.steps ? 1 : 0.5
      }
    return (
      <div>
        <button
          onClick={() => this.prevStep()}
          style={ disableBack}
        >
          Back
        </button>
        <button
          onClick={() => this.nextStep()}
          style= {disablePrev}
        >
          Next
        </button>
        <button
          onClick={() => this.props.submitForm()}
          style= {disableSubmit}
        >
          Submit
        </button>
        {React.cloneElement(this.props.children[this.state.currentStep], {
          className: "firststepclass",
          completed: this.completed,
          stepindex: this.state.currentStep
        })}
        <MultiStepCounter
          current={this.state.currentStep + 1}
          total={this.state.steps + 1}
        />
      </div>
    );
  }
}

export default MultiSteps;
