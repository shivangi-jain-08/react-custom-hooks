import React from 'react';
import useStorage from './useStorage';

const Input = () => {
  const [inputFieldValue, setInputFieldValue] = useStorage('inputValue');

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setInputFieldValue(newValue);
  };

  return (
    <div>
      <label htmlFor="textField">Text Field:</label>
      <input
        type="text"
        id="textField"
        value={inputFieldValue}
        onChange={onInputChange}
      />
      <p>Value: {inputFieldValue}</p>
    </div>
  );
};

export default Input;
