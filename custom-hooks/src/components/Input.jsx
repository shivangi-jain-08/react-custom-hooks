import React from "react";
import useStorage from "./useStorage";// Import the external CSS file

const Input = () => {
  const [inputFieldValue, setInputFieldValue] = useStorage("inputValue");

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setInputFieldValue(newValue);
  };

  return (
    <div className="container">
      <label htmlFor="textField" className="label">
        Text Field:
      </label>
      <input
        type="text"
        id="textField"
        value={inputFieldValue}
        onChange={onInputChange}
        className="textInput"
      />
      <p className="valueDisplay">Value: {inputFieldValue}</p>
    </div>
  );
};

export default Input;
