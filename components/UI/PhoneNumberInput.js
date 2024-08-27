import React from "react";
import MaskedInput from "react-text-mask";

const phoneMask = [
  "(",
  /[1-9]/, // Prevents phone numbers starting with 0
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  "-",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const PhoneNumberInput = ({ value, onChange, hasError = false }) => {
  return (
    <MaskedInput
      mask={phoneMask}
      className={`w-full px-5 py-3 text-sm bg-white rounded-3xl ${ hasError ? "border-red-600 border-2" : "border border-gray-300" }`} 
      placeholder="Number"
      guide={false}
      value={value}
      onChange={onChange}
    />
  );
};

export default PhoneNumberInput;
