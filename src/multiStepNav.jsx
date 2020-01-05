import React from "react";

export default function multiStepNav(props) {
  return (
    <div className="multi-step-nav">
         <button
          onClick={() => props.prevStep()}
          style={props.disableBack}
        >
          Back
        </button>
        <button
          onClick={() => props.nextStep()}
          style={props.disableNext}
        >
          Next
        </button>
        <button
          onClick={() => props.submitForm()}
          style={props.disableSubmit}
        >
          Submit
        </button>
    </div>
  );
}
