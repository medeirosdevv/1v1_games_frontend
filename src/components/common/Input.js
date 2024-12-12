import React from 'react';

const Input = ({ type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 focus:outline-none focus:border-red-500 transition-colors"
    />
  );
};

export default Input;

