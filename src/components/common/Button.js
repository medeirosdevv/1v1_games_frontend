import React from 'react';

const Button = ({ onClick, children, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-red-500 text-white py-2 px-4 hover:bg-red-600 transition-colors font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

