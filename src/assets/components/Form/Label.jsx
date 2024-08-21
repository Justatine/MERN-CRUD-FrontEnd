import React from 'react';

const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {text}:
    </label>
  );
};

export default Label;