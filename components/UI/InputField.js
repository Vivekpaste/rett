import React from "react";

const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  hasError = false,
}) => (
  <input
    type={type}
    value={value}
    name={name}
    className={`w-full px-5 py-3 text-sm bg-white rounded-3xl ${
      hasError ? "text-red-600 border border-red-600" : "border-0"
    }`}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputField;
