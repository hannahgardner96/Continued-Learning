import React, { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disableColorButton"
        onClick={() => setButtonDisabled(!buttonDisabled)}
      />
      <label htmlFor="disableColorButton">Disable Button</label>
    </div>
  );
}

export default App;
